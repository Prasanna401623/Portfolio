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
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'projects', label: 'My Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer
      ref={footerRef}
      className="py-14 lg:py-20 px-6 lg:px-12 bg-[#F7F7F5]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-10">

            {/* Branding */}
            <div>
              <button
                onClick={() => onNavigate('hero')}
                className="font-heading text-2xl font-black text-[#111111] hover:opacity-70 transition-opacity"
              >
                Prasanna<span className="text-[#FFCC2F]">.</span>
              </button>
              <p className="text-[#888888] text-sm mt-2 max-w-xs">
                Full-Stack Developer & AI Enthusiast.<br />
                Building the future, one line at a time.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="font-heading text-sm font-semibold text-[#555555] hover:text-[#111111] transition-colors link-underline"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <hr className="border-[#E8E8E8] mb-6" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Prasanna401623"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/prasannajha401/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#555555] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:Prasannajha623401@gmail.com"
                className="w-9 h-9 rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            <p className="font-mono text-xs text-[#AAAAAA]">
              © 2026 Prasanna Jha. All rights reserved.
            </p>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-[#555555] hover:text-[#111111] transition-colors group"
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
