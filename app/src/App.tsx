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
      threshold: 0
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
    <div className="relative min-h-screen bg-[#0F0F12]">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-main pointer-events-none" />

      {/* Floating Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb w-[600px] h-[600px] bg-[#6366F1] top-[-200px] right-[-100px] animate-float" />
        <div className="gradient-orb w-[400px] h-[400px] bg-[#8B5CF6] bottom-[20%] left-[-100px] animate-float-delayed" />
        <div className="gradient-orb w-[300px] h-[300px] bg-[#6366F1] top-[40%] right-[20%] opacity-20" />
      </div>

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        scrolled={scrolled}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <section id="hero" className="min-h-screen">
          <Hero onNavigate={scrollToSection} />
        </section>
        <section id="about" className="py-24 lg:py-32">
          <About />
        </section>
        <section id="projects" className="py-24 lg:py-32">
          <Projects />
        </section>
        <section id="experience" className="py-24 lg:py-32">
          <Experience />
        </section>
        <section id="achievements" className="py-24 lg:py-32">
          <Achievements />
        </section>
        <section id="skills" className="py-24 lg:py-32">
          <Skills />
        </section>
        <section id="contact" className="py-24 lg:py-32">
          <Contact />
        </section>
        <Footer onNavigate={scrollToSection} />
      </main>
    </div>
  );
}

export default App;
