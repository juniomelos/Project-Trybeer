import React from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css';

const SideBar = () => {
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
      <Link to={"/"} data-testid="side-menu-item-logout">
        <h2>Sair</h2>
      </Link>
    </div>

  )
}
export default SideBar;
