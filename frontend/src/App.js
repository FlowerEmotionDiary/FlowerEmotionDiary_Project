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
        <div>
          <Routes >
            <Route exact path="/calendar" component={<CalendarPage/>} />
          </Routes>
        </div>
      </Router>
    </div>
    
  );
}

export default App;