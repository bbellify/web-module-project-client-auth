import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login'
import FriendsList from './components/FriendsList';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <Route path='/' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
