import React from 'react';
import ornamentImg from '../assets/images/svg/ornament.svg';
import menuImg from '../assets/images/svg/menu.svg';
import menuAboutImg1 from '../assets/images/menu-about-1.jpg';
import menuAboutImg2 from '../assets/images/menu-about-2.jpg';
import menuAboutImg3 from '../assets/images/menu-about-3.jpg';
import menuAboutImg4 from '../assets/images/money copy.png';

const About = () => {
  return (
    <div id="about">
      <div className="about__heading__container">
        <img className="about__heading__img" src={menuImg} alt="menu" />
        <h2 className="about__heading__title">O SPOLOČNOSTI</h2>
        <p>LEONIDES</p>
        <img src={ornamentImg} alt="ornament" />
      </div>
      <ul className="about__ul gold--color">
        <li>
          <h3>INŠPIROVANÝ HISTÓRIOU</h3>
        </li>
        <li>
          <h3>VÍZIA A POSLANIE</h3>
        </li>
        <li>
          <h3>HODNOTY LEONIDES</h3>
        </li>
      </ul>
      <div className="about__images">
        <div>
          <img src={menuAboutImg1} alt="leonides-statue" />
        </div>
        <div>
          <img src={menuAboutImg2} alt="skyscrapper" />
        </div>
        <div>
          <img src={menuAboutImg3} alt="office-couple" />
        </div>
      </div>
      <div className="about__text__container">
        <section className="about__article">
          <h3>INŠPIROVANÝ HISTÓRIOU</h3>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut
            natus necessitatibus impedit aliquam mollitia cumque facere placeat
            deleniti voluptatibus. Fugit laborum dicta ex quo quas nobis sed
            dignissimos fugiat minus facilis libero magni officiis itaque, vitae
            totam rem, tenetur id non repellat dolore? Illum officiis
            exercitationem et ullam? Sunt?
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut
            natus necessitatibus impedit aliquam mollitia cumque facere placeat
            deleniti voluptatibus. Fugit laborum dicta ex quo quas nobis sed
            dignissimos fugiat minus facilis libero magni officiis itaque, vitae
            totam rem, tenetur id non repellat dolore? Illum officiis
            exercitationem et ullam? Sunt?
          </article>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            assumenda laboriosam recusandae enim voluptatum? Officiis expedita
            dolores neque molestiae saepe ipsum nam, perspiciatis necessitatibus
            dolor, veniam eligendi cumque a vitae ratione dicta ex nisi suscipit
            unde minima culpa inventore aspernatur, dolore laborum
            reprehenderit. Vel mollitia placeat rem eveniet dicta possimus
            tempore delectus esse, tempora quibusdam nihil reiciendis inventore,
            perspiciatis, nemo magnam ratione ipsum? Voluptatum est tenetur
            deserunt eveniet reprehenderit neque.
          </article>
          <h3>VÍZIA A POSLANIE LEONIDES</h3>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            cupiditate autem itaque dolor ut obcaecati ab maxime, hic, adipisci
            esse, sit ipsum repudiandae? Debitis placeat eveniet provident
            libero possimus ratione veniam soluta. Dolor perspiciatis, corporis
            neque tempora illo ea aspernatur non animi doloribus atque, nobis
            iste. Cumque quam nobis optio.
          </article>
        </section>
        <section className="about__values">
          <h3>HODNOTY</h3>
          <ul>
            <li>Transparentnosť</li>
            <li>Etika</li>
            <li>Odvaha</li>
            <li>Viera</li>
            <li>Líderstvo</li>
            <li>Vzdelávanie</li>
            <li>Tímovosť</li>
            <li>Presvedčenie</li>
          </ul>
        </section>
        <section className="about__history">
          <h3>STABILITA A ZÁZEMIE SPOLOČNOSTI</h3>
          <ul>
            <li>Vznik v roku 2009</li>
            <li>Viac ako 10 ročná prax</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
          <div>
            <img src={menuAboutImg4} alt="about-money" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
