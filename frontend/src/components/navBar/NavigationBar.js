import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./NavigationBar.scss"

const NavigationBar = () => {
    const navigate = useNavigate();
    const moveCal = () => {
        navigate("/calendar");
    }
    const moveDiaryWrite = () => {
        navigate("/diary-write");
    }
    const moveFlowerList = () => {
        navigate("/flowerList");
    }
    const moveAboutUs = () => {
        navigate("/moreAbout");
    }
    return (
        <>
        <div className="navigation">
            <button className="menuBar" onClick={moveCal}><br />달력</button>
            <div className="space"></div>

            <button className="menuBar" onClick={moveDiaryWrite}><br />일기</button>
            <div className="space"></div>

            <button className="menuBar" onClick={moveFlowerList}><br />꽃무리</button>
            <div className="space"></div>

            <button className="menuBar" onClick={moveAboutUs}><br />About Us</button>
        </div>
        </>
    );
}

export default NavigationBar;