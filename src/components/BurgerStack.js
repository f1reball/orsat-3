import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/events">
        Events
      </a>

      <a className="menu-item" href="/results">
        Results
      </a>

      <a className="menu-item" href="/runners">
        Runners
      </a>

      <a className="menu-item" href="/mstrdbs">
        Master Database
      </a>

      <a className="menu-item" href="/mapdbs">
        Map Database
      </a>

    </Menu>
  );
};
