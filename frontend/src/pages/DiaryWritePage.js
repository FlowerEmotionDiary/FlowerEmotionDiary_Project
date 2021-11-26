import { useState } from "react";
// import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import TopTitle from "../components/login-topSection/TopTitle";
import axios from "axios";
import { Button, Form, FormField, Input } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import DiaryPage from "./DiaryPage";
// import { BrowserRouter, useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router";
// import App from "../App";

const DiaryWritePage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(new Date()); // 초기 상태 : 현재 날짜와 시간으로 설정

    const year = date.getFullYear().toString();
    const month = (date.getMonth()+1).toString();
    const day = date.getDate().toString();
    const whatDay = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`;
    console.log(whatDay);

    // var navigate = useNavigate();

    const handleDateChange = (e) => {
        setDate(new Date(e.target.value));
        console.log(date);
      };

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const SubmitDiary = () => {
        // let navigate = useNavigate();
        // const year = date.getFullYear().toString();
        // const month = (date.getMonth()+1).toString();
        // const day = date.getDate().toString();
        // const whatDay = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`;
        // console.log(whatDay);
        const diaryData = {title:title, content: content, date: whatDay};
        axios.post('http://localhost:5000/api/diary', diaryData).then((res) => {
        console.log(res)
        })
        navigate(`/diary/${whatDay}`);
    }

    var navigate = useNavigate();
    
    return (
        <>
        <TopTitle />
        <div className="Diary">
            <Form onSubmit={SubmitDiary}>
            {/* <Form onSubmit={navigate(`/diary/${whatDay}`)}> */}
            {/* <Form> */}
                <FormField>
                    제목 : <Input
                        className="DiaryTitle"
                        type="text"
                        name="DiaryTitle"
                        value={title}
                        placeholder="제목을 입력하세요."
                        onChange={
                            (e) => {
                                // console.log(e.target.value)
                                setTitle(e.target.value)
                            }
                        }
                        style={{width : "700px", resize : "none"}}
                    />
                </FormField>
                <FormField>
                    날짜 : <Input 
                    type="date" 
                    name="date" 
                    value={date} 
                    onChange={handleDateChange}
                    style={{width : "700px", resize : "none"}} 
                    />
                </FormField>
                <FormField>
                    내용 : <br />
                    <textarea 
                    className="DiaryContent" 
                    value={content} 
                    placeholder="내용을 입력하세요" 
                    onChange={handleChange} 
                    style={{width : "700px", height : "500px", resize : "none"}} 
                    />
                </FormField>
                <FormField>
                    <Button type="submit" className="DiaryWriteButton">저장</Button>
                    {/* <Button type="submit" className="DiaryWriteButton">저장</Button> */}
                </FormField>
            </Form>
        </div>
        </>
    );
}

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, 
// document.getElementById('root')
// );

export default DiaryWritePage;
