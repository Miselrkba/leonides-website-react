import React from 'react';
import About from './about';
import Contact from './contact';
import Gallery from './gallery';
import Maps from './maps';
import Head from './head';
import Hero from './hero';
import Logo from './logo';
import Main from './main';
import Navbar from './navbar';
import Footer from './footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Logo />
      <About />
      <Gallery />
      <Head />
      <Main />
      <Maps />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
