import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Prasannajha623401@gmail.com',
      href: 'mailto:Prasannajha623401@gmail.com',
      accent: '#FFCC2F',
      bg: '#FFF3B0',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Prasanna401623',
      href: 'https://github.com/Prasanna401623',
      accent: '#111111',
      bg: '#F3F4F6',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prasannajha401',
      href: 'https://www.linkedin.com/in/prasannajha401/',
      accent: '#0A66C2',
      bg: '#DBEAFE',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Monroe, Louisiana',
      href: null,
      accent: '#00C48C',
      bg: '#D1FAE5',
    },
  ];

  return (
    <div ref={sectionRef} className="px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Contact</span>
          <h2
            className="font-heading font-black text-[#111111] mt-4"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            Tell me about your project
          </h2>
          <p className="text-[#888888] mt-4 max-w-xl mx-auto">
            Any project starts with a good idea. If you have a vision, I can design and build it.
            I'll reply within 2–3 working days.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* CTA card */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="card-light p-8 lg:p-10 flex flex-col items-center justify-center text-center h-full min-h-[280px]">
              {/* Big yellow mail icon */}
              <div className="w-20 h-20 rounded-2xl bg-[#FFF3B0] flex items-center justify-center mb-6">
                <Mail size={36} className="text-[#8B6800]" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#111111] mb-3">
                Get In Touch
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed mb-8 max-w-sm">
                Interested in working together or have a question?
                Click below to send me an email directly.
              </p>

              <a
                href="mailto:Prasannajha623401@gmail.com"
                className="btn-primary"
              >
                Send an email
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-3">
              {contacts.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: c.bg }}
                    >
                      <Icon size={18} style={{ color: c.accent }} />
                    </div>
                    <div className="min-w-0">
                      <div className="section-label mb-0.5">{c.label}</div>
                      <div className="text-[#111111] text-sm font-medium truncate">
                        {c.value}
                      </div>
                    </div>
                  </div>
                );

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="card-light card-light-hover p-4 flex items-center transition-all hover:border-[#FFCC2F]/60"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="card-light p-4 flex items-center">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
