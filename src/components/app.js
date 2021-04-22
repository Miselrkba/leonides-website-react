import React, { lazy, Suspense } from 'react';
import Navbar from './navbar';
import Hero from './hero';
import Logo from './logo';
import About from './about';
import Fallback from './fallback';

// lazy loaded components to improve page load
const Gallery = lazy(() => import('./gallery'));
const Head = lazy(() => import('./head'));
const Main = lazy(() => import('./main'));
const Maps = lazy(() => import('./maps'));
const Contact = lazy(() => import('./contact'));
const Footer = lazy(() => import('./footer'));

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
        <Maps />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
