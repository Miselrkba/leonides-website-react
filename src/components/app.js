import React from 'react';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Gallery from './gallery';
import Google from './google';
import Hero from './hero';
import Logo from './logo';
import Main from './main';
import Navbar from './navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Logo />
      <About />
      <Gallery />
      <Main />
      <Google />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
