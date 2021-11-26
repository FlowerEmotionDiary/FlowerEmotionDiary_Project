import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import DiaryWritePage from "./pages/DiaryWritePage";
import DiaryPage from "./pages/DiaryPage";
import LoginPage from "./pages/LoginPage"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { persistStore } from 'redux-persist';
import {Provider} from "react-redux";

const App = () => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
        <Routes>
          <Route exact path="/calendar" element={<CalendarPage />} />
          <Route exact path="/diary-write" element={<DiaryWritePage />} />
          <Route exact path="/diary/:date" element={<DiaryPage />} />
          <Route exact path="/login" element={<LoginPage  />} />
        </Routes>
    </Provider>
  );
};

export default App;


