import React from 'react';
import menuImg from '../assets/images/svg/menu.svg';

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul className="navbar__ul gold--color">
        <li>I1</li>
        <li>I2</li>
        <li>I3</li>
        <div className="navbar__ul__li__container">
          <li>MENU</li>
          <img className="navbar__ul__img" src={menuImg} alt="menu" />
        </div>
        <li>I4</li>
        <li>I5</li>
        <li>I6</li>
      </ul>
    </nav>
  );
};

export default Navbar;
