import React from 'react';
import menuImg from '../assets/images/svg/menu.svg';

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul className="navbar__ul gold--color">
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <div className="navbar__ul__li__container">
          <li>MENU</li>
          <img className="navbar__ul__img" src={menuImg} alt="menu" />
        </div>
        <li>item4</li>
        <li>item5</li>
        <li>item6</li>
      </ul>
    </nav>
  );
};

export default Navbar;
