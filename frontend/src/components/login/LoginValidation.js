import axios from "axios";
import store, { login, logout } from "../../redux_store/userSlice";
import { getCookie, setCookie} from "./Auth";

const JWT_EXPIRRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

const loginDB = async (values, navigate) => {

  await axios.post(`/api/login`, values)
    .then(response => {
      if (onLoginSuccess(response)) {
        console.log("success");
        store.dispatch(login({ id:values.id, accessToken: response.data.access_token}));
        navigate("/");
      }
    }) 
    . catch(error => {
      alert("로그인 실패!", error);
    })
}


const loginCheckDB = () => {
  const token = getCookie("refresh_token");
  console.log("token: ", token);
  axios.post( "/check", {  
    headers: {
      Authorization: `Bearer ${token}`
    }},
  )
    .then(response => {
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
}

const onSilentRefresh = (refreshToken) => {
  axios.post('/silent-refresh', refreshToken)
    .then((response) => onLoginSuccess(response))
    .catch(error => {
      alert(error)
    });
}

const onLoginSuccess = response => {
  if (response.status === 400) {
    return false;
  }
  console.log(response);
  // const accessToken = response.data.access_token;
  const refreshToken = response.data.refresh_token;
  console.log("refreshToken: ", refreshToken);
  // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  setCookie("refresh_token", refreshToken);

  // setTimeout(onSilentRefresh(refreshToken), JWT_EXPIRRY_TIME - 60000);
  return true;
}

export { onLoginSuccess , loginDB, loginCheckDB };