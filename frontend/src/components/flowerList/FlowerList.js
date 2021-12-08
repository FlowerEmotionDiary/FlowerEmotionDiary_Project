import axios from "axios";
import React, { useState, useEffect } from "react";
import "./FlowerList.scss";
import { connect } from 'react-redux';

const FlowerList = ({Login}) => {
    const [count, setCount] = useState(0);
    const [emotion, setEmotion] = useState("");
    const getFlower = async () => {
        const response = await axios.get('/flower')
        setCount(response.data.count);
        setEmotion(response.data.emotion);
    }
    useEffect(() => {
        console.log(Login)
        if(Login.login.is_login){
            getFlower();
        }
    }, []);
   
    return( 
        <div id='container'>
            <img id='background' 
                src={`images/background.png`}>
            </img>
            {
                emotion ?             
                <img id='flower' src={`images/${
                    count < 2 ? "새싹/" : 
                    count < 4 ? "중간싹/" : "꽃/" 
                }${emotion}.png`}></img> 
            : null
            }
        </div>
    );
}

function mapStateToProps(state) {
    return {Login:state};
}
export default connect(mapStateToProps)(FlowerList);
