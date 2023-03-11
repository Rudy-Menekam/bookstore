import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => (
  <nav id="nav">
    <h1 className="logo">
      Bookstore CMS
    </h1>
    <ul className="navlinks">
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);
export default Header;
