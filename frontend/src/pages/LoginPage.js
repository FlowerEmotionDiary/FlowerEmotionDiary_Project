import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import LoginForm from "../components/login/loginForm";
import TopTitle from '../components/login-topSection/TopTitle';
import '../Login.scss';
import { connect } from 'react-redux';


const LoginPage = ({user}) => {
    const navigate = useNavigate();
    console.log(user.is_login)
    useEffect(() => {
        if(user.is_login){
            console.log("already logined!");
            navigate(`/calendar`);
        }
    }, [])

    return (
        <div>
            <TopTitle />
            <LoginForm />
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {user:state};
}
export default connect(mapStateToProps)(LoginPage);