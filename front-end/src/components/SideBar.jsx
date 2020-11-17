import React, { useState, useEffect } from 'react';
import { deleteFromLocalStorage, loadFromLocalStorage } from '../services/localStorage';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import { logout } from '../store/ducks/user';

import { Link } from 'react-router-dom';

import './SideBar.css';

const SideBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // Set all local Action/Reducers
  const [navigate, setNavigate] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log("handleClick sidebar");
    dispatch(logout()); //async
    deleteFromLocalStorage('user');
    setNavigate(true);
    setTimeout(function(){ 
      // history.push('/login')
    }, 1000);
  }

  if (navigate) {
    return (


      <Redirect to="/login" push={false}  />

    )

  }


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
