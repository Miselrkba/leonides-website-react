import React, { lazy, Suspense } from 'react';
// import Fallback from './fallback';
import Navbar from './navbar';
import Hero from './hero';
import Logo from './logo';
import About from './about';
import Maps from './maps';
import Contact from './contact';
// import Gallery from './gallery';
// import Head from './head';
import Fallback from './fallback';
// import Main from './main';
import Footer from './footer';

// lazy loaded components to improve page load
const Gallery = lazy(() => import('./gallery'));
const Head = lazy(() => import('./head'));
const Main = lazy(() => import('./main'));
// const Maps = lazy(() => import('./maps'));
// const Contact = lazy(() => import('./contact'));
// const Footer = lazy(() => import('./footer'));

// suspense is loading component to show loading sign while page is loaded
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Logo />
      <About />
      <Suspense fallback={<Fallback />}>
        <Gallery />
        <Head />
        <Main />
      </Suspense>
      <Maps />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
