import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import LoginForm from "../components/login/loginForm";
import TopTitle from '../components/login-topSection/TopTitle';
import '../Login.scss';
import { connect } from 'formik';


const LoginPage = () => {

    // const navigate = useNavigate();
    // console.log(Login)

    // useEffect(() => {
    //     if(isLogin){
    //         console.log("already logined!");
    //         navigate(`/calendar`);
    //     }
    // })
    
    return (
        <div>
            <TopTitle />
            <LoginForm />
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    console.log(state);
}
export default LoginPage;