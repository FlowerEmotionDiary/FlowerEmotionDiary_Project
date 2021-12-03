import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import DiaryWritePage from "./pages/DiaryWritePage";
import DiaryPage from "./pages/DiaryPage";
import LoginPage from "./login/LoginPage"
import React from "react";
import FirstPage from "./pages/FirstPage";
import Register from "./Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/calendar" element={<CalendarPage />} />
          <Route exact path="/diary-write" element={<DiaryWritePage />} />
          <Route exact path="/diary/:date" element={<DiaryPage />} />
          <Route exact path="/login" element={<LoginPage  />} />
          <Route exact path="/register" element={<Register  />} />
          <Route exact path="/" element={<FirstPage  />} />
          {/* <Route path="/" element={<Navigate to="/calendar" />} /> */}
        </Routes>
      </BrowserRouter>
  );
};

export default App;


