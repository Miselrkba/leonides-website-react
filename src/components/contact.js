import React from 'react';
import ornamentImg from '../assets/images/svg/ornament.svg';
import menuImg from '../assets/images/svg/menu.svg';
import circleContactImg from '../assets/images/svg/bg-contact-circles.svg';

const Contact = () => {
  return (
    <>
      <img
        src={circleContactImg}
        alt="circle-contact"
        className="contact__circle__img"
      />
      <div id="contact">
        <div className="contact__heading__container">
          <img className="contact__heading__img" src={menuImg} alt="menu" />
          <h1 className="contact__heading__title">KONTAKT</h1>
          <p>LEONIDES</p>
          <img src={ornamentImg} alt="ornament" />
        </div>

        <div className="contact__container">
          <h4>
            <span className="gold--color">ADRESA</span>{' '}
            <span>municipality in Laconia, Greece</span>{' '}
          </h4>
          <h4>
            <span className="gold--color">TELEFÓN</span>{' '}
            <span>+00421985465464</span>{' '}
          </h4>
          <h4>
            <span className="gold--color">MESTO</span>{' '}
            <span>SPARTA, GRÉCKO</span>{' '}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Contact;
