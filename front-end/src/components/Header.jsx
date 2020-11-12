import React from 'react';
import { useLocation } from 'react-router-dom'
import './Header.css';

const Header = () => {
  const location = useLocation();
  console.log('current location', location);
return (
  <div className="headerContainer">
    <h1>Here is Header</h1>

  </div>
)
}

export default Header;
