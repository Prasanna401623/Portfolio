import { useEffect, useState } from 'react';
import './App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Navigation from './components/Navigation';
import Affiliations from './sections/Affiliations';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        scrolled={scrolled}
      />

      <main>
        <section id="hero" className="min-h-screen">
          <Hero onNavigate={scrollToSection} />
        </section>

        <hr className="section-divider" />

        <section id="about" className="py-20 lg:py-28 bg-[#F7F7F5]">
          <About />
        </section>

        <hr className="section-divider" />

        <section id="skills" className="py-20 lg:py-28">
          <Skills />
        </section>

        <hr className="section-divider" />

        <section id="experience" className="py-20 lg:py-28 bg-[#F7F7F5]">
          <Experience />
        </section>

        <hr className="section-divider" />

        <section id="projects" className="py-20 lg:py-28">
          <Projects />
        </section>

        <hr className="section-divider" />

        <section id="achievements" className="py-20 lg:py-28 bg-[#F7F7F5]">
          <Achievements />
        </section>

        <hr className="section-divider" />

        <section id="affiliations" className="py-20 lg:py-28">
          <Affiliations />
        </section>

        <hr className="section-divider" />

        <section id="contact" className="py-20 lg:py-28 bg-[#F7F7F5]">
          <Contact />
        </section>

        <hr className="section-divider" />

        <Footer onNavigate={scrollToSection} />
      </main>
    </div>
  );
}

export default App;
