import React from "react";
import { useNavigate } from 'react-router';
import { Formik } from "formik";
import store, { login, logout } from "../redux_store/userSlice";
import { connect } from "react-redux";
import {loginDB} from "./LoginValidation";
import "./LoginForm.scss";

const LoginForm = ({onBtnClick}) => {
	const navigate = useNavigate();
	return (
		<>
		<div className="login">
			<div className="logintitle">LOGIN</div>
			<Formik 
				initialValues={{ email: "", password: ""}}
				// validationSchema={}
				onSubmit={(values, {setSubmitting}) => {
					try {
						loginDB(values, navigate);
					} catch {}
					onBtnClick({user:values.email});
					setSubmitting(false);
				}}>
				{formik => (
					<form onSubmit={formik.handleSubmit}>
						<input className="email-input" id="email" typ="eamil"
						placeholder="  이메일을 입력하세요."  
						{...formik.getFieldProps('email')} />
						{ formik.touched.email && formik.errors.email ? 
							(<div>{formik.errors.email}</div>) : null }

						<input className="pw-input" id="password" type="password"
						placeholder="  비밀번호를 입력하세요."  
						{...formik.getFieldProps('password')}/>
						{ formik.touched.password && formik.errors.password ? 
							(<div>{formik.errors.password}</div>) : null }

						<button className="loginbutton" type="submit">Login</button>
					</form>
				)}
			</Formik>
		</div>
		</>
	)

}

function mapDispatchToProps(dispatch){
    return {
        onBtnClick: (id, accessToken) => dispatch(login(id, accessToken))
    };
}
export default connect(mapDispatchToProps)(LoginForm);