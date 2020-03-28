import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>E-Commerce</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/order">Browse Orders</NavLink>
        </li>
        <li>
          <NavLink to="/product">Browse Products</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
