import React from "react";
import { useNavigate } from 'react-router';
import { Formik } from "formik";
import store, { login, logout } from "../redux_store/userSlice";
import { connect } from "react-redux";
import {loginDB} from "./LoginValidation";

const LoginForm = ({onBtnClick}) => {
	const navigate = useNavigate();
	return (
		<div>
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

						<label htmlFor="email">Email</label>
						<input id="email" typ="eamil" {...formik.getFieldProps('email')} />
						{ formik.touched.email && formik.errors.email ? 
							(<div>{formik.errors.email}</div>) : null }

						<label htmlFor="password">Password</label>
						<input id="password" type="password" {...formik.getFieldProps('password')}/>
						{ formik.touched.password && formik.errors.password ? 
							(<div>{formik.errors.password}</div>) : null }

						<button type="submit">Login</button>

					</form>
				)}
			</Formik>
		</div>
	)

}

function mapDispatchToProps(dispatch){
    return {
        onBtnClick: (id, accessToken) => dispatch(login(id, accessToken))
    };
}
export default connect(mapDispatchToProps)(LoginForm);