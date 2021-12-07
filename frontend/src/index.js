import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from "./redux_store/userSlice";
import {Provider} from "react-redux";
import axios from "axios";
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';
import "normalize.css";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api";
// axios.defaults.baseURL = "http://127.0.0.1:5000/api";
const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, 
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
