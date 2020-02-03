import React from 'react';
import { Link } from 'react-router-dom';
function Nav(props) {
  return (
    <nav data-gtm-nav='primary'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/news/1'>Legit News</Link>
        </li>
        <li>
          <Link to='/news/2'>True Dinks</Link>
        </li>
        <li>
          <Link to='/news/3'>Fake News</Link>
        </li>
        <li>
          <Link to='/news/4'>Pure Bullshit</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
