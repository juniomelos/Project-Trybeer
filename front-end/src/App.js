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
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import ClientOrders from './pages/ClientOrders/ClientOrders';
import ClientProfile from './pages/ClientProfile/ClientProfile';
import jwt_decode from 'jwt-decode';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const requireAuth = () => {
    const userData = loadFromLocalStorage('user');
    if (userData != null) {
      const decoded = jwt_decode(userData.token);
      const now = Date.now().valueOf() / 1000; //inspiration from web Stackflow
      if (typeof decoded.exp !== 'undefined' && decoded.exp > now) {
        const user = {
          name: userData.name,
          email: userData.email,
          role: userData.role,
        };
        dispatch(login({ token: userData.token, data: user }));
        return true;
      }
    }
    return false;
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/orders" component={ClientOrders} />
        <Route
          exact
          path="/products"
          render={() =>
            requireAuth() ? <Products /> : <Redirect to="/login" />
          }
        />
        <Route exact path="/checkout" 
                render={() =>
                  requireAuth() ? <Checkout /> : <Redirect to="/login" />
                }
        />
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
