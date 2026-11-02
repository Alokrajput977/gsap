import { useEffect } from 'react';
import Preloader from './components/Preloader.jsx';
import Header from './components/Header.jsx';
import MobileNav from './components/MobileNav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import YardScene from './components/YardScene.jsx';
import RoadRoute from './components/RoadRoute.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Services from './components/Services.jsx';
import Platform from './components/Platform.jsx';
import RailYard from './components/RailYard.jsx';
import WhySunic from './components/WhySunic.jsx';
import Industries from './components/Industries.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import initSite from './lib/site.js';

let started = false;

export default function App() {
  useEffect(() => {
    if (started) return;
    started = true;
    initSite();
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <MobileNav />
      <main id="top">
        <Hero />
        <About />
        <YardScene />
        <RoadRoute />
        <HowItWorks />
        <Services />
        <Platform />
        <RailYard />
        <WhySunic />
        <Industries />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
