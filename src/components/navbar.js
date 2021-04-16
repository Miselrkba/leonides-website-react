import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import menuImg from '../assets/images/svg/menu.svg';
import '../styles/react-sliding-pane.scss';
import slideMenuImg from '../assets/images/svg/menu-rot.svg';
import slideMenuImg1 from '../assets/images/menu-01.jpg';
import slideMenuImg2 from '../assets/images/menu-02.jpg';
import slideMenuImg3 from '../assets/images/menu-03.jpg';
import slideMenuImg4 from '../assets/images/menu-04.jpg';
import slideMenuImg5 from '../assets/images/menu-05.jpg';
import slideMenuImg6 from '../assets/images/menu-06.jpg';

const CloseIcon = () => {
  return (
    <div className="slidingpane__header">
      <p className="gold--color">MENU</p>
      <img src={slideMenuImg} alt="menu-rot" />
    </div>
  );
};

const Navbar = () => {
  const [state, setState] = useState({ isPaneOpenLeft: false });

  return (
    <>
      <SlidingPane
        closeIcon={<CloseIcon />}
        isOpen={state.isPaneOpenLeft}
        from="left"
        width="50%"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <div className="slidingpane__images">
          <div className="slidingpane__images__container">
            <img src={slideMenuImg1} alt="children-whisper" />
            <p>I1</p>
          </div>
          <div className="slidingpane__images__container">
            <img src={slideMenuImg2} alt="villar" />
            <p>I2</p>
          </div>
          <div className="slidingpane__images__container">
            <img src={slideMenuImg3} alt="stacked-money" />
            <p>I3</p>
          </div>
          <div className="slidingpane__images__container">
            <img src={slideMenuImg4} alt="odler-couple" />
            <p>I4</p>
          </div>
          <div className="slidingpane__images__container">
            <img src={slideMenuImg5} alt="odler-couple" />
            <p>I5</p>
          </div>
          <div className="slidingpane__images__container">
            <img src={slideMenuImg6} alt="odler-couple" />
            <p>I6</p>
          </div>
        </div>
      </SlidingPane>
      <nav id="navbar">
        <ul className="navbar__ul gold--color">
          <li>I1</li>
          <li>I2</li>
          <li>I3</li>
          <div className="navbar__ul__li__container">
            <li>MENU</li>
            <img
              className="navbar__ul__img"
              src={menuImg}
              alt="menu"
              onClick={() => setState({ isPaneOpenLeft: true })}
              aria-hidden="true"
            />
          </div>
          <li>I4</li>
          <li>I5</li>
          <li>I6</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
