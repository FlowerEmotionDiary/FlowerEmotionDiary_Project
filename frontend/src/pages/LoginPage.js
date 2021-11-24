import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import TopTitle from '../components/login-topSection/TopTitle';
import Calendar from '../Calendar';
// import BottomSection from './components/login-bottomSection/BottomSection';
import './Login.scss';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [pw,  setPW] = useState('');
    const onClick = () => {
        return <Route path="/cal" component={Calendar} />
    };
    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };
    return (
        <>
            <TopTitle />
            <div className="login">
                <div className="logintitle">LOGIN</div>
                <form action="" method="post">
                    <input
                        className = "email-input" 
                        type="text"
                        name="message"
                        value={email}
                        placeholder="  이메일을 입력하세요."
                        onChange={
                            (e) => {
                                // console.log(e.target.value)
                                setEmail(e.target.value)
                            }
                        } // 여기서 onChange 함수가 꼭 필요한가?
                    /><br />
                    <input
                        className="pw-input"
                        type="text"
                        name="message"
                        value={pw}
                        placeholder="  비밀번호를 입력하세요."
                        onChange={
                            (e) => {
                                // console.log(e.target.value)
                                setPW(e.target.value)
                            }
                        }
                        onKeyPress={onKeyPress}
                    /><br />
                    <button className="loginbutton" type="submit" onClick={onClick}>LOGIN</button>
                </form>
            </div>
            {/* <BottomSection /> */}
        </>
    );

}

export default Login;