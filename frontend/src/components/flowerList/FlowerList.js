import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./FlowerList.scss";

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
        <div id='container'>
            <img id='background' 
                src={`${process.env.PUBLIC_URL}/images/background.png`}>
            </img>
            <img id='flower' 
                src={`${process.env.PUBLIC_URL}/images/꽃-${emotion}.png`}>
            </img>
        </div>
    );
}

export default FlowerList;