import { Button, Form, Input } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import "./Register.scss";

const Register = () => {
    const [email, setEmail] = useState('');
    const [pw,  setPW] = useState('');
    const [nick, setNick] = useState('');
    const onClick = () => {
        const data = {email: email, password: pw, name: nick};
        axios.post('/register', data).then((res) => {
            console.log(res)
        })
    };

    return(
        <>
        <div className="register">
            <div className="registertitle">REGISTER</div>
            <Form>
                <Form.Field>
                    <input 
                    className="email-input"
                    type="text"
                    placeholder="  이메일을 입력하세요." 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <input 
                    className="pw-input"
                    type="text"
                    placeholder="  비밀번호를 입력하세요." 
                    value={pw} 
                    onChange={(e) => setPW(e.target.value)}  />
                </Form.Field>
                <Form.Field>
                    <input 
                    className="nick-input"
                    type="text"
                    placeholder="  닉네임을 입력하세요." 
                    value={nick} 
                    onChange={(e) => setNick(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Button className="registerbutton" type="submit" onClick={onClick}>
                        REGISTER
                    </Button>
                </Form.Field>
            </Form>
        </div>
        </>
    );

}

export default Register;