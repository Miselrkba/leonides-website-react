import React from 'react';
import headImg from '../assets/images/svg/head.svg';
import circleImg from '../assets/images/svg/bg-needs-circles.svg';

const Head = () => {
  return (
    <div id="head">
      <div className="head__container">
        <img className="head__logo__img" src={headImg} alt="head" />
        <img
          src={circleImg}
          alt="circle-needs"
          className="head__circles__img"
        />
        <div className="head__title__container">
          <h1>LEONIDES</h1>
          <p>Transform your life !</p>
        </div>
      </div>
    </div>
  );
};

export default Head;
