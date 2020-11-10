import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
<Router>
  <Switch>
  <Route exact path="/login" component={Login} />

  </Switch>
</Router>


  )
}

export default App;
