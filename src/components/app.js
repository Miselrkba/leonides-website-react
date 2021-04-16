import React, { lazy, Suspense } from 'react';
import About from './about';
import Contact from './contact';
import Gallery from './gallery';
import Head from './head';
import Hero from './hero';
import Logo from './logo';
import Main from './main';
import Navbar from './navbar';
import Footer from './footer';

const Maps = lazy(() => import('./maps'));

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
      <Suspense fallback={<h1>loading maps …</h1>}>
        <Maps />
      </Suspense>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
