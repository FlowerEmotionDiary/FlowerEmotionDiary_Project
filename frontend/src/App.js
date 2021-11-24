
import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import DiaryWrite from "./pages/DiaryWritePage";
import DiaryPage from "./pages/DiaryPage";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/calendar" element={<CalendarPage />} />
          <Route exact path="/diary-write" element={<DiaryWrite />} />
          <Route exact path="/diary/:date" element={<DiaryPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

