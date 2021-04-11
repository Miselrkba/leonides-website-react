import React from 'react';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Gallery from './gallery';
import Google from './google';
import Hero from './hero';
import Main from './main';

const App = () => {
  return (
    <div className="app">
      <Hero />
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
