import { Link } from "react-router-dom";
import TopTitle from "./components/login-topSection/TopTitle";

const FirstPage = () => {
    // var navigate = useNavigate();

    // const moreAbout = () => {
    //     return <Link to="/moreAbout"></Link>
    // }

    return(
        <>
        <TopTitle />
        <div className="intro">
            나의 하루를 적어보세요.<br />
            당신의 감정을 분석해드립니다.<br />
            그리고 감정을 공유해보세요.<br />
        </div>
        <Link to="/moreAbout"><button type="button" className="moreAbout">more about me</button></Link>
        <Link to="/login"><button type="button" className="moreAbout">일기 쓰러가기</button></Link>
        </>
    );

}

export default FirstPage;