import React, { lazy, Suspense } from 'react';
import Navbar from './navbar';
import Hero from './hero';
import Logo from './logo';
import About from './about';
import Maps from './maps';
import Contact from './contact';
import Fallback from './fallback';
import Footer from './footer';

// lazy load image heavy components
const Gallery = lazy(() => import('./gallery'));
const Head = lazy(() => import('./head'));
const Main = lazy(() => import('./main'));

// suspense to show fallback loading... component
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
