import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopTitle from "../components/login-topSection/TopTitle";
import axios from "axios";
import { Button, Form, FormField, Input } from "semantic-ui-react";

const DiaryWritePage = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const whatDay = searchParams.get("date");
  console.log(whatDay);

  const [date, setDate] = useState(whatDay); // 초기 상태 : 현재 날짜와 시간으로 설정

  const handleDateChange = (e) => {
    setDate(new Date(e.target.value));
    console.log(date);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const SubmitDiary = () => {
    const diaryData = { title: title, content: content, date: whatDay };
    axios
      .post(
        "http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/diary",
        diaryData
      )
      .then((res) => {
        console.log(res);
      });
    navigate(`/diary/${whatDay}`);
  };

  var navigate = useNavigate();

  return (
    <>
      <TopTitle />
      <div className="Diary">
        <Form onSubmit={SubmitDiary}>
          {/* <Form onSubmit={navigate(`/diary/${whatDay}`)}> */}
          {/* <Form> */}
          <FormField>
            제목 :{" "}
            <Input
              className="DiaryTitle"
              type="text"
              name="DiaryTitle"
              value={title}
              placeholder="제목을 입력하세요."
              onChange={(e) => {
                // console.log(e.target.value)
                setTitle(e.target.value);
              }}
              style={{ width: "700px", resize: "none" }}
            />
          </FormField>
          <FormField>
            날짜 :{" "}
            <Input
              type="date"
              name="date"
              value={date}
              onChange={handleDateChange}
              style={{ width: "700px", resize: "none" }}
            />
          </FormField>
          <FormField>
            내용 : <br />
            <textarea
              className="DiaryContent"
              value={content}
              placeholder="내용을 입력하세요"
              onChange={handleChange}
              style={{ width: "700px", height: "500px", resize: "none" }}
            />
          </FormField>
          <FormField>
            <Button type="submit" className="DiaryWriteButton">
              저장
            </Button>
            {/* <Button type="submit" className="DiaryWriteButton">저장</Button> */}
          </FormField>
        </Form>
      </div>
    </>
  );
};

export default DiaryWritePage;
