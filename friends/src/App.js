import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Login from './components/Login'
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm'
import Logout from './components/Logout'

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to='/logout'>Logout</NavLink>
        </nav>
        <h2>Client Auth Project</h2>
        <Switch>
          <PrivateRoute exact path='/newfriend' component={NewFriendForm} />
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <PrivateRoute path='/logout' component={Logout} />
          <Route path='/' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
