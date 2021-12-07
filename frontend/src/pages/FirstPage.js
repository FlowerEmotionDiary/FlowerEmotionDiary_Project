import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutDB } from "../login/LoginValidation";
import { useNavigate } from 'react-router';

const FirstPage = ({Login}) => {
    const navigate = useNavigate();
    return(
        <>
        <div className="intro">
            나의 하루를 적어보세요.<br />
            당신의 감정을 분석해드립니다.<br />
            그리고 감정을 공유해보세요.<br />
        </div>
        <Link to="/moreAbout"><button type="button" className="moreAbout">more about me</button></Link>
        <div>
            { 
                Login.login.is_login ? 
                    <button type="button" onClick={()=>logoutDB(navigate)}>로그아웃</button>
                 :  <Link to="/login"><button type="button" className="moreAbout">일기 쓰러가기</button></Link>

            }
        </div>
        </>
    );

}

function mapStateToProps(state, ownProps) {
    return {Login:state};
}
export default connect(mapStateToProps)(FirstPage);