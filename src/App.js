import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <div>
        <Hero />
      </div>
      <div className="about-me">
        <AboutMe />
      </div>
      <div className='container'>
        <div className="experience">
          <Experience />
        </div>
        <div className="education">
          <Education />
        </div>
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
