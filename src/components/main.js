import React from 'react';
import Fade from 'react-reveal/Fade';
import menuImg from '../assets/images/svg/menu.svg';
import ornamentImg from '../assets/images/svg/ornament.svg';
import menuneedImg1 from '../assets/images/menu-need-1.jpg';
import menuneedImg2 from '../assets/images/menu-need-2.jpg';
import menuneedImg3 from '../assets/images/menu-need-3.jpg';
import menuneedImg4 from '../assets/images/menu-need-4.jpg';

const Main = () => {
  return (
    <div id="main">
      <div className="main__heading__container">
        <img className="main__heading__img" src={menuImg} alt="menu" />
        <h1 className="main__heading__title">POTREBY ĽUDÍ</h1>
        <p>LEONIDES</p>
        <img src={ornamentImg} alt="ornament" />
      </div>
      <Fade bottom duration={1200}>
        <div className="main__grid">
          <div className="main__grid__item1">
            <h3>DETI</h3>
          </div>
          <div className="main__grid__item2">
            <h3>BÝVANIE</h3>
          </div>
          <div className="main__grid__item3">
            <h3>SPORENIE</h3>
          </div>
          <div className="main__grid__item4">
            <h3>DÔCHODOK</h3>
          </div>
          <div className="main__grid__item5">
            <img src={menuneedImg1} alt="children-whisper" />
          </div>
          <div className="main__grid__item6">
            <img src={menuneedImg2} alt="villar" />
          </div>
          <div className="main__grid__item7">
            <img src={menuneedImg3} alt="stacked-money" />
          </div>
          <div className="main__grid__item8">
            <img src={menuneedImg4} alt="odler-couple" />
          </div>
        </div>
      </Fade>
      <div className="main__text__container">
        <section className="main__article">
          <article className="gold--color italic--font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut
            natus necessitatibus impedit aliquam mollitia cumque facere placeat
            deleniti voluptatibus. Fugit laborum dicta ex quo quas nobis sed
            dignissimos fugiat minus facilis libero magni officiis itaque, vitae
            totam rem, tenetur id non repellat dolore? Illum officiis
            exercitationem et ullam? Sunt? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam ut natus necessitatibus
            impedit aliquam mollitia cumque facere placeat deleniti
            voluptatibus. Fugit laborum dicta ex quo quas nobis sed dignissimos
            fugiat minus facilis libero magni officiis itaque, vitae totam rem,
            tenetur id non repellat dolore? Illum officiis exercitationem et
            ullam? Sunt?
          </article>
          <h3>I. DETI</h3>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut
            natus necessitatibus impedit aliquam mollitia cumque facere placeat
            deleniti voluptatibus. Fugit laborum dicta ex quo quas nobis sed
            dignissimos fugiat minus facilis libero magni officiis itaque, vitae
            totam rem, tenetur id non repellat dolore? Illum officiis
            exercitationem et ullam? Sunt?
          </article>
          <h3>II. BÝVANIE</h3>
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
          <h3>III. SPORENIE</h3>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            cupiditate autem itaque dolor ut obcaecati ab maxime, hic, adipisci
            esse, sit ipsum repudiandae? Debitis placeat eveniet provident
            libero possimus ratione veniam soluta. Dolor perspiciatis, corporis
            neque tempora illo ea aspernatur non animi doloribus atque, nobis
            iste. Cumque quam nobis optio.
          </article>
          <h3>IV. DÔCHODOK</h3>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            cupiditate autem itaque dolor ut obcaecati ab maxime, hic, adipisci
            esse, sit ipsum repudiandae? Debitis placeat eveniet provident
            libero possimus ratione veniam soluta. Dolor perspiciatis, corporis
            neque tempora illo ea aspernatur non animi doloribus atque, nobis
            iste. Cumque quam nobis optio.
          </article>
        </section>
      </div>
    </div>
  );
};

export default Main;
