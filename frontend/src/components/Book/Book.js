import "./Book.scss";
import NavigationBar from "../navBar/NavigationBar";
import { logoutDB } from "../../login/LoginValidation";
import { useNavigate } from 'react-router';

const Book = props => {
    const navigate = useNavigate();
    return (
        <>
            <div className="background">
                <div className="bookmark"><NavigationBar /></div>
                <div className="book">
                    <div className="pageBrighter" style={{ float: "left" }}></div>
                    <div className="pageBrightest" style={{ float: "left" }}></div>
                    <div className="leftpage"><div className="in">{props.left}</div></div>
                    <div className="rightpage"><div className="in">{props.right}</div></div>
                    <div className="pageBrighter" style={{ float: "right" }}></div>
                    <div className="pageBrightest" style={{ float: "right" }}></div>
                </div>
            </div>
            
            <button onClick={()=>logoutDB(navigate)}>로그아웃</button>
        </>
    );
}

export default Book;