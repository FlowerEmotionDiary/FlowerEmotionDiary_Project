import { useState } from "react";
import ReactDOM from "react-dom";
// import { useNavigate } from "react-router-dom";
import TopTitle from "./components/login-topSection/TopTitle";
import axios from "axios";
import { Button, Form, FormField, Input } from 'semantic-ui-react';

const DiaryWrite = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(new Date()); // 초기 상태 : 현재 날짜와 시간으로 설정

    const handleDateChange = (e) => {
        setDate(new Date(e.target.value));
        console.log(date);
      };

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const submitDiary = () => {
        const year = date.getFullYear().toString();
        const month = (date.getMonth()+1).toString();
        const day = date.getDate().toString();
        const whatDay = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`;
        console.log(whatDay);
        const diaryData = {title:title, content: content, date: whatDay};
        axios.post('http://localhost:5000/api/diary', diaryData).then((res) => {
        console.log(res)
        })
    }
    
    return (
        <>
        <TopTitle />
        <div className="Diary">
            <Form>
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
                    <Button type="submit" className="DiaryWriteButton" onClick={submitDiary}>
                        저장
                    </Button>
                </FormField>
            </Form>
        </div>
        </>
    );
}

// const DiaryWrite = () => {
//   const [textarea, setTextarea] = useState(
//     "The content of a textarea goes in the value attribute"
//   );

//   const handleChange = (event) => {
//     setTextarea(event.target.value)
//   }

//   return (
//     <form>
//       <textarea value={textarea} onChange={handleChange} />
//     </form>
//   )
// }

ReactDOM.render(<DiaryWrite />, document.getElementById('root'));

export default DiaryWrite;