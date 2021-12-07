import axios from "axios";
import React, { useState, useEffect } from "react";
import "./FlowerList.scss";

const FlowerList = () => {
    const [count, setCount] = useState(0);
    const [emotion, setEmotion] = useState("");
    const getFlower = async () => {
        console.log("flower")
        const response = await axios.get('/flower')
        console.log("flower: ", response)
        setCount(response.data.count);
        setEmotion(response.data.emotion);
    }
    useEffect(() => {
        getFlower();
    }, []);
   
    return( 
        <div id='container'>
            <img id='background' 
                src={`images/background.png`}>
            </img>
            <img id='flower' 
                src={`images/${
                    count > 20 ? "꽃" : "새싹" 
                }-${emotion}.png`}>
            </img>
        </div>
    );
}

export default FlowerList;
