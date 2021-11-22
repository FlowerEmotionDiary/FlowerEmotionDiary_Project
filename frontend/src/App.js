import './App.css';
// import Login from './Login';
// import EventPractice from './EventPractice';
// import Say from './Say';
import CalendarPage from './Calendar';'./pages/CalendarPage';

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  // return <Say />;
  // return <Login />;
  // return <CalendarPage />;

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/calendar" component={CalendarPage} />
          </Switch>
        </div>
      </Router>
    </div>
    
  );
}

export default App;