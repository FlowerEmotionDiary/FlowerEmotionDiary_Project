import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import "./NavigationBar.scss"

const NavigationBar = () => {
    const [width, setWidth] = useState("95px")
    const activeStyle = () => {setWidth("100px")}
    return (
        <>
        <div className="navigation">
            <button className="menuBar" style={{width: width}}><NavLink className="navlink" to="/calendar" 
            style={({ isActive }) =>
              isActive ? setWidth("150px") : setWidth("95px")}
              ><br />달력</NavLink></button>
            <div className="space"></div>

            <button className="menuBar"><NavLink className="navlink" to="/diary-write" 
            // style={({ isActive }) =>
            //   isActive ? {width : "100px"} : {width : "95px"}}
              ><br />일기</NavLink></button>
            <div className="space"></div>

            <button className="menuBar"><NavLink className="navlink" to="/flowerList" 
            // style={({ isActive }) =>
            //   isActive ? {width : "100px"} : {width : "95px"}}
              ><br />꽃무리</NavLink></button>
            <div className="space"></div>

            <button className="menuBar"><NavLink className="navlink" to="/moreAbout" 
            // style={({ isActive }) =>
            //   isActive ? {width : "100px"} : {width : "95px"}}
              ><br />About Us</NavLink></button>
        </div>
        </>
    );
}

export default NavigationBar;