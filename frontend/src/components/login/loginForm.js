import React, {useState, useEffect} from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from 'react-router';
import { login } from "../../redux/action";
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [pw,  setPW] = useState('');
    const [validation, setValidation] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [allOk, setAllOk] = useState(false);

    const loginHandler = async () => {
        setEmail('');
        setPW('');
        if(allOk){
            try{
                const response = await axios.post('http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/login', 
                    {
                        email: email, password: pw 
                    });
                
                    dispatch(login(response.data.access_token, response.data.user_id));
                    console.log(response.data.access_token);
                    navigate('/calendar');
            } catch(error) {
                console.log('try again');
            }
        } else {
            console.log('try again');
        }
    };

    // email과 pw가 전부 입력되었는지 확인.
    useEffect(() => {
        if(email !== '' && pw !== '') setAllOk(true);
        else setAllOk(false);
    }, [email, pw]);

    return (
        <div>
            <input 
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="이메일을 입력하세요." />
            <input
                type="text"
                value={pw}
                onChange={
                    (e) => {
                        setPW(e.target.value)
                    }
                }
                placeholder="  비밀번호를 입력하세요."
            />
            <button type="submit" onClick={loginHandler}>LOGIN</button>
        </div>
    )

}

export default LoginForm;