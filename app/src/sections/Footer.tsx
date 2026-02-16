import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative py-16 lg:py-24 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Content */}
          <div className="text-center mb-12">
            {/* Logo */}
            <h2 className="font-heading text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#FAFAFA] mb-4">
              Prasanna<span className="text-[#6366F1]">.</span>
            </h2>
            
            <p className="text-[#A1A1AA] max-w-md mx-auto mb-8">
              Building the future, one line of code at a time.
            </p>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="font-mono text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors link-underline"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/prasannajha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FAFAFA]/5 border border-[#FAFAFA]/10 flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#6366F1]/20 hover:border-[#6366F1]/30 transition-all"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/prasannajha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FAFAFA]/5 border border-[#FAFAFA]/10 flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/30 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:prasanna@email.edu"
                className="w-10 h-10 rounded-full bg-[#FAFAFA]/5 border border-[#FAFAFA]/10 flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#6366F1]/20 hover:border-[#6366F1]/30 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#FAFAFA]/10 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-[#71717A]">
              © 2026 Prasanna Jha. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-sm text-[#A1A1AA] hover:text-[#6366F1] transition-colors group"
            >
              Back to top
              <ArrowUp
                size={14}
                className="transition-transform group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
