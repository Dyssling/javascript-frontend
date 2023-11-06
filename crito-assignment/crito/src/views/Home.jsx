import { useState, useEffect } from 'react';
import Showcase from '../components/Showcase';
import Logos from '../components/Logos';
import Features from '../components/Features';
import About from '../components/About';
import Services from '../components/Services';
import ChooseUs from '../components/ChooseUs';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';

function Home() {
  useEffect(() => {
    document.title = "Home - Crito";
  }, [])

  return (
    <>
      <Showcase />
      <Logos />
      <Features />
      <About />
      <Services />
      <ChooseUs />
      <Projects />
      <Team />
      <Testimonial />
    </>
  )
}

export default Home
