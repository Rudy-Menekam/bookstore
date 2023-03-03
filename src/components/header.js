import React from 'react';

const Header = () => (
  <nav id="nav">
    <h1 className="logo">
      Bookstore CMS
    </h1>
    <ul className="navlinks">
      <li>
        <a href="/">Books</a>
      </li>
      <li>
        <a href="/categories">Categories</a>
      </li>
    </ul>
  </nav>
);
export default Header;
