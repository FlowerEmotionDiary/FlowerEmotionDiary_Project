import "./App.css";
import LoginPage from "./login/LoginPage"
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ShowCalendar from "./pages/ShowCalendar";
import ShowDiaryWrite from "./pages/ShowDiaryWrite";
import ShowFlowerList from "./pages/ShowFlowerList";
import ShowMoreAbout from "./pages/ShowMoreAbout";
import ShowDiaryPage from "./pages/ShowDiaryPage";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage  />} />
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path="/calendar" element={<ShowCalendar />} />
        <Route exact path="/diary-write" element={<ShowDiaryWrite />} />
        <Route exact path='/flowerList' element={<ShowFlowerList />} />
        <Route exact path='/moreAbout' element={<ShowMoreAbout />} />
        <Route exact path="/diary" element={<ShowDiaryPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
