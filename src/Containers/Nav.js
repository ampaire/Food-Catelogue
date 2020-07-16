import React from 'react';
import { Link } from 'react-router-dom';
import food from '../Assets/food.png';

const NavBar = () => (
  <div className="nav header">
    <Link className="home-link" to="/">
      <img className="logo-img" src={food} alt="logo" />
      <h4 className=" Nav-text"> The CookBook </h4>
    </Link>
  </div>
);

export default NavBar;