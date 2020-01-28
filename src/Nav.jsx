import React from 'react';

function Nav(props) {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
}

export default Nav;
