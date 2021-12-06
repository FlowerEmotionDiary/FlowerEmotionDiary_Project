import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import ShowRegisterPage from "./pages/ShowRegisterPage";
import ShowCalendar from "./pages/ShowCalendar";
import ShowDiaryWrite from "./pages/ShowDiaryWrite";
import ShowFlowerList from "./pages/ShowFlowerList";
import ShowMoreAbout from "./pages/ShowMoreAbout";
import ShowDiaryPage from "./pages/ShowDiaryPage";
import ShowLoginPage from "./pages/ShowLoginPage";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/login" element={<ShowLoginPage  />} />
        <Route exact path='/register' element={<ShowRegisterPage />} />
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
