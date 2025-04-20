import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Employment from './components/Employment';
import Projects from './components/Projects';
import Technical from './components/Technical';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import HireMePopup from './components/HireMePopup';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative">
        <div id="home">
          <Hero />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="Certifications">
          <Certifications />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="employment">
          <Employment />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      {/* Add this line */}
      <HireMePopup />
    </div>
  );
}

export default App;
