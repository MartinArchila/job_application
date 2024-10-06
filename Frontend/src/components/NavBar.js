// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // We'll create this CSS file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Future Astro - Job Applications Tracker</h1>
      <ul className="navbar-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-application" activeClassName="active">
            Add Application
          </NavLink>
        </li>
        <li>
          <NavLink to="/applications" activeClassName="active">
            Applications
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
