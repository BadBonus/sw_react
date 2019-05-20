import React from 'react';
import SwapiService from './../../services/swapi-service'

import './header.css';

const Header = () => {

    let service = new SwapiService();
    service.getAllPeople();
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;