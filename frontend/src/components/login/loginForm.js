import React from "react";
import { useNavigate } from 'react-router';
import { Formik } from "formik";
import axios from "axios";
import store, { login, logout } from "../../redux_store/userSlice";
import { connect } from "react-redux";
const JWT_EXPIRRY_TIME = 60 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

const LoginForm = () => {
	const navigate = useNavigate();
	const loginDB = (values, navigate) => {

		axios.post(`/api/login`, values)
		  .then(response => {
			onLoginSuccess(response)
			console.log("success");
			store.dispatch(login({ id:values.id, accessToken: response.data.access_token}));
			loginCheckDB();
			navigate("/");
		  }) 
		  . catch(error => {
			alert("로그인 실패!", error);
		  })
	  }
	  const onLoginSuccess = response => {
		console.log(response);
		
		const accessToken = response.data.access_token;
		console.log(accessToken);
		axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
	  
		// setTimeout(onSilentRefresh(response), JWT_EXPIRRY_TIME - 6000);
	  }
	
	  const loginCheckDB = () => {
		axios.get( "/api/check")
		  .then(response => {
			console.log("check: ", response.data);
		  })
		  .catch(error=>{
			console.log(error);
		  })
	  }


	return (
		<div>
			<Formik 
				initialValues={{ email: "", password: ""}}
				// validationSchema={}
				onSubmit={(values, {setSubmitting}) => {
					console.log(values);
					loginDB(values, navigate);
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

function mapStateToProps(state, ownProps) {
    console.log(state);
	return {};
}

export default connect(mapStateToProps) (LoginForm);