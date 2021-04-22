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
import Fallback from './fallback';

const Maps = lazy(() => import('./maps'));

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<Fallback />}>
        <Logo />
        <About />
        <Gallery />
        <Head />
        <Main />
        <Maps />
      </Suspense>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
