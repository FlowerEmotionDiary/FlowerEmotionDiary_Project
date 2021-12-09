import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import "./NavigationBar.scss"

const NavigationBar = () => {
    const activeStyle = {
      width: "100px",
      left: "-20px",
      backgroundColor: "#f0bb62"
    }
    return (
        <>
        <div className="navigation">
            <NavLink className="menuBar" to="/calendar" 
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              <a className="navlink">달력</a>
              </NavLink>
            <div className="space"></div>

            <NavLink className="menuBar" to="/diary-write" 
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              <a className="navlink">일기</a>
              </NavLink>
            <div className="space"></div>

            <NavLink className="menuBar" to="/flowerList" 
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              <a className="navlink">꽃무리</a>
              </NavLink>
            <div className="space"></div>


            <NavLink className="menuBar" to="/moreAbout" 
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              <a className="navlink">About Us</a>
              </NavLink>
            <div className="space"></div>

            <NavLink className="menuBar" to="/team" 
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              <a className="navlink">Team</a>
              </NavLink>
            <div className="space"></div>
        </div>
        </>
    );
}

export default NavigationBar;