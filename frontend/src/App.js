import './App.css';
// import Login from './Login';
// import EventPractice from './EventPractice';
// import Say from './Say';
import CalendarPage from './pages/CalendarPage';

import React, { useState } from "react";
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';

const App = () => {
  // return <Say />;
  // return <Login />;
  // return <CalendarPage />;

  return (
    <div className="App">
      <Router>
          <Routes >
            <Route exact path="/calendar" element={<CalendarPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;