import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import DiaryWrite from './DiaryWrite';
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
      <Router>
        <Routes>
          <Route exact path="/calendar" element={<CalendarPage />} />
          <Route exact path="/diary-write" element={<DiaryWrite  />} />
          <Route exact path="/login" element={<LoginPage  />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

