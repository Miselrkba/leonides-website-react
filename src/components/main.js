import React from 'react';
import menuImg from '../assets/images/svg/menu.svg';
import ornamentImg from '../assets/images/svg/ornament.svg';

const Main = () => {
  return (
    <div id="main">
      <div className="main__heading__container">
        <img className="main__heading__img" src={menuImg} alt="menu" />
        <h1 className="main__heading__title">PORTEBY ĽUDÍ</h1>
        <p>LEONIDES</p>
        <img src={ornamentImg} alt="ornament" />
      </div>
    </div>
  );
};

export default Main;
