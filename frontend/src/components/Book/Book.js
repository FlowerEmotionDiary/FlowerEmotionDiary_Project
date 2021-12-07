import "./Book.scss";
import NavigationBar from "../navBar/NavigationBar";

const Book = props => {
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
        </>
    );
}

export default Book;