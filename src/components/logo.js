import React from 'react';
import logoImg from '../assets/images/svg/logo.svg';

const Logo = () => {
  return (
    <div id="logo">
      <img className="logo__img" src={logoImg} alt="leonides-logo" />
    </div>
  );
};

export default Logo;
