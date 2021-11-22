import { useState } from "react";
import ReactDOM from "react-dom";
import TopTitle from "./components/login-topSection/TopTitle";

// const axios = require('axios');

const DiaryWrite = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = (event) => {
        setContent(event.target.value)
    }
    
    return (
        <>
        <TopTitle />
        <div className="Diary">
            <form>
                제목 : <input
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
                /><br />
                내용 : <br /><textarea className="DiaryContent" value={content} 
                placeholder="내용을 입력하세요" onChange={handleChange} style={{width : "700px", height : "500px", resize : "none"}} /><br />
                {/* <textarea className="DiaryContent" value={content} 
                placeholder="내용을 입력하세요" onChange={handleChange} /><br /> */}
                {/* resize : 크기 고정 */}
                <button type="submit" className="DiaryWriteButton">저장</button>
            </form>
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