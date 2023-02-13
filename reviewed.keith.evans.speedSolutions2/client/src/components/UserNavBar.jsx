import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserNavBar.css';

const UserNavBar = ({ userData, goToParts, setLoggedOffHome }) => (
  <>
    <nav
      id="nav_menu"
      className="navbar-expand bg-dark navbar-dark sticky-top"
      role="presentation"
      onClick={() => setLoggedOffHome(true)}
    >
      <ul className="navbar-nav text-light p-1">
        <NavLink
          to="parts"
          className="lnk "
          onClick={() => goToParts()}
        >
          Browse All Parts
        </NavLink>
        <NavLink to="sellMyParts" className="ml-3 lnk">Sell My Parts</NavLink>
        <NavLink to="tech" className="ml-3 lnk">Tech Tips</NavLink>
      </ul>
    </nav>
  </>
);

export default UserNavBar;
