import React from 'react';
import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import WorkX from './sections/WorkX/Workx';
import './tailwind.css';


function App() {
  return (
    <div className="flex flex-col gap-14 lg:gap-24 xl:gap-32 items-center mx-auto mb-16">
      <Hero />
      <Projects />
      <WorkX />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
