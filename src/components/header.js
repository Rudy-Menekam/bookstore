import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav id="nav">
    <h1 className="logo">
      Bookstore CMS
    </h1>
    <ul className="navlinks">
      <li>
        <Link href="/">Books</Link>
      </li>
      <li>
        <Link href="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);
export default Header;
