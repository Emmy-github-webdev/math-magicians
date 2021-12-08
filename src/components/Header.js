/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="nav-bar">
    <h1>Math Magicians</h1>
    <nav>
      <Link to="/" data-test="header-item" className="nav-list">Home</Link>
      {' '}
      |
      {' '}

      <Link to="/calculator" data-test="header-item" className="nav-list">Calculator</Link>
      {' '}
      |
      {' '}

      <Link to="/quote" data-test="header-item" className="nav-list">Quote</Link>

    </nav>
  </div>
);

export default Header;
