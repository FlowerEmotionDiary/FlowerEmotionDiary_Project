import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import DiaryWritePage from "./pages/DiaryWritePage";
import DiaryPage from "./pages/DiaryPage";
import LoginPage from "./pages/LoginPage"
import React from "react";
import FirstPage from "./pages/FirstPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import { persistStore } from 'redux-persist';
import {Provider} from "react-redux";
import FirstPage from "./pages/FirstPage";
import RegisterPage from "./pages/RegisterPage";
import MoreAboutPage from "./pages/MoreAboutPage";
import FlowerListPage from "./pages/FlowerListPage";
import Book from "./components/Book/Book";
import ShowCalendar from "./components/Book/ShowCalendar";
import ShowDiaryWrite from "./components/Book/ShowDiaryWrite";
import ShowFlowerList from "./components/Book/ShowFlowerList";
import ShowMoreAbout from "./components/Book/ShowMoreAbout";
import ShowDiaryPage from "./components/Book/ShowDiaryPage";

const App = () => {

  return (
    <BrowserRouter>
      {/* <Route exact path="/book" element={<Book  />} /> */}
      {/* <Route exact path="/calendar" element={<CalendarPage />} /> */}
      {/* <Route exact path="/diary-write" element={<DiaryWritePage />} /> */}
      {/* <Route exact path="/diary" element={<DiaryPage />} /> */}
      <Route exact path="/login" element={<LoginPage  />} />
      <Route exact path='/register' element={<RegisterPage />} />
      {/* <Route exact path='/moreAbout' element={<MoreAboutPage />} /> */}
      {/* <Route exact path='/flowerList' element={<FlowerListPage />} /> */}
      {/* <Route exact path="/pressCalendar" element={<PressCalendar />} /> */}
      <Route exact path="/calendar" element={<ShowCalendar />} />
      <Route exact path="/diary-write" element={<ShowDiaryWrite />} />
      <Route exact path='/flowerList' element={<ShowFlowerList />} />
      <Route exact path='/moreAbout' element={<ShowMoreAbout />} />
      <Route exact path="/diary" element={<ShowDiaryPage />} />
    </BrowserRouter>
  );
};

export default App;
