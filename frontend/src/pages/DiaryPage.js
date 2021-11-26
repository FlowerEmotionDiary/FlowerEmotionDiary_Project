// 일기 보여주는 페이지

import axios from "axios";
import { useParams } from "react-router";

const DiaryPage = () => {
    let { date } = useParams();
    const path = `http://localhost:5000/api/diary/${date}`;
    const diary = axios.get(path);
    return (
        <>
        <div className="date">
           {/* {date} */}
           {date.slice(0,4)}년 {date.slice(5,7)}월 {date.slice(8,10)}일
        </div>
        <div className="diaryContent">
            {/* 방법 1 */}
            {/* {
                axios.get(path).then((res) => {
                    console.log(res);
                }).catch((error) => {
                    console.log(error)
                })
            } */}

            {/* 방법 2 */}
            {/* {diary} */}
        </div>
        </>
    );
}

export default DiaryPage;
