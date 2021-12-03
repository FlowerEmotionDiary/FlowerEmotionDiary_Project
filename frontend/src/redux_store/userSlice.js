import { configureStore, createSlice} from "@reduxjs/toolkit";
// import { deleteCookie} from "../Cookie";


const Login = createSlice({
    name: "LoginReducer",
    initialState: { user: false, accessToken: false, is_login: false},
    reducers: {
        login: (state, action) => {
            return { 
                user:action.payload.id, 
                accessToken:action.payload.accessToken ,
                is_login: true
            };
        },
        logout: () => {
            // deleteCookie("is_login")
            return { 
                user:false, 
                accessToken:false ,
                is_login: false
            };
        }
    }
});

const store = configureStore({ reducer: Login.reducer});

export const { login, logout } = Login.actions;
export default store;