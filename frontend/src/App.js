import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import DiaryWritePage from "./pages/DiaryWritePage";
import DiaryPage from "./pages/DiaryPage";
import LoginPage from "./pages/LoginPage"
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";


const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/calendar" element={<CalendarPage />} />
          <Route exact path="/diary-write" element={<DiaryWritePage />} />
          <Route exact path="/diary/:date" element={<DiaryPage />} />
          <Route exact path="/login" element={<LoginPage  />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;


