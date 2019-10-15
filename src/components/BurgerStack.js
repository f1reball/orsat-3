import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        <i class="fas fa-home"></i>  Home
      </a>

      <a className="menu-item" href="/events">
        <i class="fas fa-map-marked-alt"></i> Events
      </a>

      <a className="menu-item" href="/results">
        <i class="fas fa-poll"></i> Results
      </a>

      <a className="menu-item" href="/runners">
        <i class="fas fa-running"></i> Runners
      </a>

      <a className="menu-item" href="/mstrdbs">
        <i class="fas fa-database"></i> Master Database
      </a>

      <a className="menu-item" href="/mapdbs">
        <i class="fas fa-database"></i> Map Database
      </a>

    </Menu>
  );
};
