// 일기 보여주는 페이지

import axios from "axios";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";

const DiaryPage = () => {
    let { date } = useParams();
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                `/diary/${date}`,
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div>
                <button onClick={onClick}>getdata</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
        </div>
    );
}

export default DiaryPage;
