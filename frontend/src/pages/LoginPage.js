import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import { useSelector} from "react-redux";
import LoginForm from "../components/login/loginForm";
import TopTitle from '../components/login-topSection/TopTitle';
import '../Login.scss';


const LoginPage = () => {

    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.user.isLogined);
    const user_id = useSelector((state) => state.user.user_id);

    useEffect(() => {
        if(isLogin){
            console.log("already logined!");
            navigate(`/calendar`);
        }
    })
    return (
        <div>
            <TopTitle />
            <LoginForm />
        </div>
    );

}

export default LoginPage;