import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const FlowerList = () => {
    const [count, setCount] = useState(0);
    const [emotion, setEmotion] = useState("");
    const getFlower = async () => {
        const response = await axios.get('/flower')
        console.log(response)
        setCount(response.data.count);
        setEmotion(response.data.emotion);
    }
    useEffect(() => {
        getFlower();
    }, []);

    return( 
        <>
        <h1>Flower List</h1>
        <p>{count}</p>
        <p>{emotion}</p>
        </>
    );
}

export default FlowerList;