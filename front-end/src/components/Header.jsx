import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import hamburger from '../images/hamburger.png';
import { changeVisibility } from '../store/ducks/sideBarHide';

import './Header.css';

const Header = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  let headTitle = 'Trybeer';
  const title = {
    '/login': 'Login'
  }
  function handleClick() {
    dispatch(changeVisibility()); //async
  }
  // const Wrapper = props.wrapper; //Imported Component

  if (title[location.pathname] != undefined) headTitle = title[location.pathname];
  return (
    <div>
      <div className="headerContainer">
        <button data-testid="top-hamburguer"
          onClick={handleClick}

        >
          <img src={hamburger} alt="test" height="80px" />
        </button>
        <div className="headTitleContainer">

          <h1 data-testid="top-title">{headTitle}</h1>
        </div>
      </div>
      {/* <Wrapper/> */}
    </div>
  )
}

export default Header;
