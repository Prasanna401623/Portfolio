import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  scrolled: boolean;
}

const navItems = [
  { id: 'projects', label: 'My Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
];

export default function Navigation({ activeSection, onNavigate, scrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'border-b border-[#E8E8E8] shadow-sm' : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="font-heading text-xl font-bold text-[#111111] hover:opacity-70 transition-opacity"
          >
            Prasanna<span className="text-[#FFCC2F]">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-heading text-sm font-600 transition-colors link-underline ${
                  activeSection === item.id
                    ? 'text-[#111111] font-semibold'
                    : 'text-[#555555] hover:text-[#111111]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-sm"
            >
              Get in touch
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#111111]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-400 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-heading text-3xl font-bold text-[#111111] transition-opacity"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary mt-4"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: 'opacity 0.3s ease 0.3s',
            }}
          >
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
}
