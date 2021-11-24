import "./App.css";
import CalendarPage from "./pages/CalendarPage";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/calendar" element={<CalendarPage />} />
          <Route exact path="/diary" element={<DiaryResult   />} />
          <Route exact path="/diary-write" element={<DiaryWrite  />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

