import React from "react";
import { useNavigate } from 'react-router';
import { Formik } from "formik";
import { loginCheckDB, loginDB } from "./LoginValidation"

const LoginForm = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Formik 
				initialValues={{ email: "", password: ""}}
				// validationSchema={}
				onSubmit={(values, {setSubmitting}) => {
					console.log(values);
					loginDB(values, navigate);
					loginCheckDB();
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




			{/* <input 
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
			<button type="submit" onClick={loginHandler}>LOGIN</button> */}
		</div>
	)

}

export default LoginForm;