import { Link } from "react-router-dom";
import TopTitle from "../components/login-topSection/TopTitle";
import { connect } from "react-redux";
import { logout } from "../redux_store/userSlice";
import axios from "axios";

const FirstPage = ({Login, onBtnClick}) => {
    
    console.log(Login.Login.is_login)
    return(
        <>
        <TopTitle />
        <div className="intro">
            나의 하루를 적어보세요.<br />
            당신의 감정을 분석해드립니다.<br />
            그리고 감정을 공유해보세요.<br />
        </div>
        <Link to="/moreAbout"><button type="button" className="moreAbout">more about me</button></Link>
        <button onClick={() => {
            axios.get( "/check")
            .then(response => {
                console.log("check: ", response.data);
            })
            .catch(error=>{
                console.log(error);
            })
	    }}>유저체크</button>  
        <div>
            { 
                Login.Login.is_login ? 
                    <button type="button" onClick={ onBtnClick }>로그아웃</button>
                 :  <Link to="/login"><button type="button" className="moreAbout">일기 쓰러가기</button></Link>

            }
        </div>
        </>
    );

}

function mapStateToProps(state, ownProps) {
    return {Login:state};
}
function mapDispatchToProps(dispatch, ownProps){
    return {
        onBtnClick: () => dispatch(logout())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);