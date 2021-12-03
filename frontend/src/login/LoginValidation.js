import axios from "axios";
import { connect } from "react-redux";
import store, { login, logout } from "../redux_store/userSlice";


const JWT_EXPIRRY_TIME = 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

const loginDB = (values, navigate) => {
  axios.post(`/login`, values, { withCredentials: true })
    .then(response => {
      onLoginSuccess(response)
      console.log("success");
      navigate("/calendar");
    }) 
    . catch(error => {
      console.log(error);
    })
  }

const onSilentRefresh = () => {
  const refreshToken = document.cookie;
  axios.post('/silent-refresh', refreshToken)
    .then(res => onLoginSuccess(res))
    .catch(error => {
      console.log(error);
    })
}

const onLoginSuccess = response => {
  console.log(response);

  const accessToken = response.data.access_token;
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  setTimeout(onSilentRefresh(), JWT_EXPIRRY_TIME - 6000);
}

const loginCheckDB = () => {
  axios.get( "/check")    
    .then(response => {
    console.log("check: ", response.data);
    })
    .catch(error=>{
    console.log(error);
    })
}

export { loginDB, loginCheckDB, onLoginSuccess };