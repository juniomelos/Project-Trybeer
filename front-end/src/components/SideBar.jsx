import React, { useState, useEffect } from 'react';
import { deleteFromLocalStorage, loadFromLocalStorage } from '../services/localStorage';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import { logout } from '../store/ducks/user';

import { Link } from 'react-router-dom';

import './SideBar.css';

const SideBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // Set all local Action/Reducers
  const { isLoggedIn } = useSelector((state) => state.userReducer.session);

  const handleClick = () => {
    deleteFromLocalStorage('user');
    dispatch(logout());
  }

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login');
    }
  }, [isLoggedIn]);

  return (
    <div className="side-menu-container">
      <ul>
        <li>
          <Link to={"/products"} data-testid="side-menu-item-products">
            Produtos
          </Link>
        </li>
        <li>
          <Link to={"/orders"} data-testid="side-menu-item-my-orders">
            Meu Pedidos
          </Link>
        </li>
        <li>
          <Link to={"/profile"} data-testid="side-menu-item-my-profile">
            Meu Perfil
          </Link>
        </li>
      </ul>
      <button
        data-testid="side-menu-item-logout"
        onClick={handleClick}
      >Sair</button>
    </div>
  )
}
export default SideBar;
