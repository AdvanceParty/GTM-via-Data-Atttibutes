import React from 'react';
import { Link } from 'react-router-dom';
function Nav(props) {
  return (
    <nav data-gtm-nav='primary'>
      <ul>
        <li>
          <Link to='/articles/1'>Legit News</Link>
        </li>
        <li>
          <Link to='/articles/2'>True Dinks</Link>
        </li>
        <li>
          <Link to='/articles/3'>Fake News</Link>
        </li>
        <li>
          <a href='/decoy.html'>Decoy Page!</a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
