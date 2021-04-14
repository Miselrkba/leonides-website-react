import React from 'react';
import logoHead from '../assets/images/svg/logo-head.svg';
import ornamentImg from '../assets/images/svg/ornament.svg';

const Footer = () => {
  return (
    <div id="footer">
      <div className="contact__footer__container">
        <img className="contact__footer__img" src={logoHead} alt="menu" />
        <img
          className="contact__footer__ornament"
          src={ornamentImg}
          alt="ornament"
        />
        <div className="contact__footer_div gold--color">No Copyright 2021</div>
        <div className="contact__footer_div gold--color">
          Všetky práva nevyhradené.
        </div>
      </div>
    </div>
  );
};

export default Footer;
