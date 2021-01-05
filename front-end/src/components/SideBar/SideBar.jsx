import React, { useState, useEffect } from 'react';
import { deleteFromLocalStorage } from '../../services/localStorage';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/ducks/user';
import LogoImage from '../../assets/images/cj-logo.png';

import './SideBar.css';
import {
  Icon,
  LoggoutBtn,
  Logo,
  MenuItem,
  MenuLink,
  ProfileDetails,
  ProfileHeader,
  ProfileImage,
} from './style';
import { Button } from '../StyledComponents/buttons';

/** Icons */
import ProfileIcon from '../../assets/images/profile.svg';
import OrdersIcon from '../../assets/images/orders.svg';

const menus = {
  client: [
    {
      route: '/products',
      label: 'Products',
      dataTestID: 'side-menu-item-products',
    },
    {
      route: '/orders',
      label: 'Meu Pedidos',
      dataTestID: 'side-menu-item-my-orders',
    },
    {
      route: '/profile',
      label: 'Meu Perfil',
      dataTestID: 'side-menu-item-my-profile',
    },
  ],
  administrator: [
    {
      route: '/admin/orders',
      label: 'Pedidos',
      icon: OrdersIcon,
      dataTestID: 'side-menu-item-orders',
    },
    {
      route: '/admin/profile',
      label: 'Meu Perfil',
      icon: ProfileIcon,
      dataTestID: 'side-menu-item-profile',
    },
  ],
};

const SideBar = ({ userType }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // Set all local Action/Reducers
  const { isLoggedIn } = useSelector((state) => state.userReducer.session);
  const { name, role } = useSelector((state) => state.userReducer.user);
  const [selectedMenu, setselectedMenu] = useState('Pedidos');

  const handleClick = () => {
    dispatch(logout());
    deleteFromLocalStorage('user');
    history.push('/login');
  };

  return (
    <div
      className={
        role === 'client' ? 'side-menu-container' : 'admin-side-bar-container'
      }
    >
      <Logo src={LogoImage} />
      <ProfileHeader>
        <ProfileImage />
        <ProfileDetails>
          <strong>{name}</strong>
          <span>{role}</span>
        </ProfileDetails>
      </ProfileHeader>
      <ul>
        {menus[role].map((menu) => (
          <MenuItem onClick={() => setselectedMenu(menu.label)}>
            <Icon src={menu.icon} selected={selectedMenu === menu.label} />
            <MenuLink to={menu.route} data-testid={menu.dataTestID}>
              {menu.label}
            </MenuLink>
          </MenuItem>
        ))}
      </ul>
      <LoggoutBtn
        data-testid="side-menu-item-logout"
        btype="outline"
        size="200"
        onClick={() => handleClick()}
      >
        Sair
      </LoggoutBtn>
    </div>
  );
};
export default SideBar;
