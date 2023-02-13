import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="navBar">
    <NavLink to="/">
      <h2 className="title text-light"><i>Speed Solutions</i></h2>
    </NavLink>
  </div>
);

export default Header;
