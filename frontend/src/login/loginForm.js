import React from "react";
import { useNavigate } from 'react-router';
import { Formik } from "formik";
import {loginDB} from "./LoginValidation";

const LoginForm = () => {
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


export default LoginForm;