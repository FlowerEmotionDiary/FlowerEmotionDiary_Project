// 일기 보여주는 페이지

import axios from "axios";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import "./Diary.scss";


const Diary = () => {
    let location = useLocation();
    const params = new URLSearchParams(location.search);
    let date = params.get('writtenDate');
    console.log(date);
    // const path = `http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/diary/${date}`;
    // const diary = axios.get(path);
    const [fulldata, setFulldata] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null);
                setFulldata(null);
                setLoading(true);
                const response = await axios.get(
                    `/diary/${date}`,
                );

                setYear(date.split('-')[0])
                setMonth(date.split('-')[1])
                setDay(date.split('-')[2])

                setFulldata(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);


        };
        fetchData();
    }, [date]);

    const onClick = () => {


    }

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러 발생</div>;

    return (
        <div>
            <h3><p id='date'>{year}년 {month}월 {day}일</p></h3>
            <h1>{fulldata && <p id='diarytitle'>{fulldata.title}</p>}</h1>
            <h3>{fulldata && <p id='diarycontent'>{fulldata.content}</p>}</h3>
            <button id='button' onClick={onClick}>수정</button>
            <button id='button' onClick={onClick}>삭제</button>
        </div>
    );
}

export default Diary;
