import React, {useState} from 'react';
// import { Route } from 'react-router-dom';
import TopTitle from './components/login-topSection/TopTitle';
// import Calendar from './Calendar';
// import BottomSection from './components/login-bottomSection/BottomSection';
import './Login.scss';
import axios from 'axios';
import { Button, Form, Input } from 'semantic-ui-react';

// const api = axios.create({
//     baseURL:
// })

//hhhhhh
//bvivihvyi
const LoginTest = () => {
    const [email, setEmail] = useState('');
    const [pw,  setPW] = useState('');
    const onClick = () => {
        axios.post('http://localhost:5000/api/login', {email: {email}, password: {pw}}).then((res) => {
            console.log(res)
        })
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
            <Form>
                <Form.Field>
                    <Input 
                    className="email-input"
                    type="text"
                    placeholder="  이메일을 입력하세요." 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Input 
                    className="pw-input"
                    type="text"
                    placeholder="  비밀번호를 입력하세요." 
                    value={pw} 
                    onChange={(e) => setPW(e.target.value)} 
                    onKeyPress={onKeyPress} />
                </Form.Field>
                <Form.Field>
                    <Button className="loginbutton" type="submit" onClick={onClick}>
                        LOGIN
                    </Button>
                </Form.Field>
            </Form>
            {/* <div className="login">
                <div className="logintitle">LOGIN</div>
                    <input
                        className = "email-input" 
                        type="text"
                        name="message"
                        value={email}
                        placeholder="  이메일을 입력하세요."
                        onChange={
                            (e) => {
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
                                setPW(e.target.value)
                            }
                        }
                        onKeyPress={onKeyPress}
                    /><br />
                    <button className="loginbutton" type="submit" onClick={onClick}>LOGIN</button>
            </div> */}
            </div>
        </>
    );

}

export default LoginTest;