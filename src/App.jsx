import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Education } from './components/Education/Education';
import { Certificates } from './components/Certificates/Certificates';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['skills', 'experience', 'projects', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className={styles.App}>
        <Navbar activeSection={activeSection} />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App
