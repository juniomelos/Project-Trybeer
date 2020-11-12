import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadFromLocalStorage } from './services/localStorage';
import Login from './pages/Login/Login';
import { login } from './store/ducks/user';
import Register from './pages/Register/Register';
import ClientProfile from './pages/ClientProfile/ClientProfile';
import jwt_decode from 'jwt-decode';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const requireAuth = () => {
    const userData = loadFromLocalStorage('user');
    if (userData != null) {
      const decoded = jwt_decode(userData.token);
      console.log('token decoded', decoded);
      const now = Date.now().valueOf() / 1000;
      console.log("now", now, decoded.exp);
      if (typeof decoded.exp !== 'undefined' && decoded.exp > now) {
        const user = {
          name: userData.name,
          email: userData.email,
          role: userData.role,
        };
        dispatch(login({ token: userData.token, user }));
        return true;
      }
    }
    return false;
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/profile"
          render={() =>
            requireAuth() ? <ClientProfile /> : <Redirect to="/login" />
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
