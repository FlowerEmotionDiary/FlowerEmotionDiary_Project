// 일기 보여주는 페이지

import axios from "axios";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const DiaryPage = () => {
    let { date } = useParams();
    // const path = `http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/diary/${date}`;
    // const diary = axios.get(path);
    const [data, setData] = useState(null);

    // const [loading, setLoading] = useState(false);

    const onClick = async () => {
        try {
            const response = await axios.get(
                `http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/diary/${date}`,
            );
            setData(response.data);
            // setData(response.data.content);
        } catch (e) {
            console.log(e);
        }
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         // setLoading(true);
    //         try {
    //             const res = await axios.get(
    //                 `http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/diary/${date}`,
    //             );
    //             setData(res.data);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         // setLoading(false);
    //     };
    //     fetchData();
    // });

    // return (
    //     <>
    //     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    //     </>
    // );

    return (
        <div>

            {data && <textarea name='title' rows={7} value={data.title} />}
            {data && <textarea name='content' rows={7} value={data.content} />}
        </div>
    );


    // axios.get(`http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/diary/${date}`).then((res) => {
    //     setData(res.data);
    // }).catch((error) => {
    //     console.log(error)
    // })
    // return (
    //     <>
    //     <div className="date">
    //        {/* {date} */}
    //        {date.slice(0,4)}년 {date.slice(5,7)}월 {date.slice(8,10)}일
    //     </div>
    //     {/* <div className="diaryContent"> */}
    //         {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    //     {/* </div> */}
    //     </>
    // );
}

const HeadBlock = styled.div`
`







export default DiaryPage;
