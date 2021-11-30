import axios from "axios";
import store, { login, logout } from "../../redux_store/userSlice";
import { getCookie, setCookie} from "./Auth";

const JWT_EXPIRRY_TIME = 60 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

const loginDB = (values, navigate) => {

  axios.post(`/login`, values)
    .then(response => {
      onLoginSuccess(response)
      console.log("success");
      store.dispatch(login({ id:values.id, accessToken: response.data.access_token}));
      navigate("/");
    }) 
    . catch(error => {
      alert("로그인 실패!", error);
    })
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

const onSilentRefresh = () => {
  console.log("silentRefresh :", getCookie('refresh_token'))
  axios.get('/silent-refresh', {
      headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookie('refresh_token')}`,
    }}
  )
    .then(response => onLoginSuccess(response))
    .catch(error => {
      alert(error)
    });
}

const onLoginSuccess = response => {
  console.log(response);
  
  const accessToken = response.data.access_token;
  console.log(accessToken);
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  // setTimeout(onSilentRefresh(response), JWT_EXPIRRY_TIME - 6000);
}

export { onLoginSuccess , loginDB, loginCheckDB };