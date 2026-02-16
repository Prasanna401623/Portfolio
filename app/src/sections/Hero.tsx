import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/hero_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0F12]/50 to-[#0F0F12]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000"
        style={{ opacity: 0, transform: 'translateY(30px)' }}
      >
        {/* Label */}
        <div className="inline-block mb-6">
          <span className="font-mono text-sm text-[#6366F1] tracking-widest uppercase px-4 py-2 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10">
            Computer Science Student
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-[clamp(3rem,8vw,6rem)] font-bold text-[#FAFAFA] leading-[1.1] tracking-tight mb-6">
          Prasanna{' '}
          <span className="text-gradient">Jha</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(1.125rem,2vw,1.5rem)] text-[#A1A1AA] max-w-2xl mx-auto mb-4 leading-relaxed">
          Full-Stack Developer & AI Enthusiast
        </p>

        {/* Tagline */}
        <p className="text-[#71717A] max-w-xl mx-auto mb-10">
          Building systems at the intersection of engineering, design, and data
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('projects')}
            className="btn-primary"
          >
            View My Work
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-secondary"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://github.com/Prasanna401623"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717A] hover:text-[#FAFAFA] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/prasannajha401/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717A] hover:text-[#FAFAFA] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="mailto:prasanna@email.edu"
            className="text-[#71717A] hover:text-[#FAFAFA] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <button
          onClick={() => onNavigate('about')}
          className="text-[#71717A] hover:text-[#6366F1] transition-colors"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </div>
  );
}
