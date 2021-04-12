import React from 'react';
import ornamentImg from '../assets/images/svg/ornament.svg';
import menuImg from '../assets/images/svg/menu.svg';

const About = () => {
  return (
    <div id="about">
      <section className="company">
        <div className="company__heading__container">
          <img className="company__heading__img" src={menuImg} alt="menu" />
          <h2>O SPOLOČNOSTI</h2>
          <h3>LEONIDES</h3>
          <img src={ornamentImg} alt="ornament" />
        </div>
      </section>
    </div>
  );
};

export default About;
