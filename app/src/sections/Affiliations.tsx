import { useEffect, useRef, useState } from 'react';

interface AffiliationItem {
  id: string;
  organization: string;
  role: string;
  emoji: string;
  accent: string;
}

const affiliations: AffiliationItem[] = [
  {
    id: 'gdsc',
    organization: 'Google Developer Student Clubs',
    role: 'Technical Lead',
    emoji: '🔵',
    accent: '#4285F4',
  },
  {
    id: 'codepath',
    organization: 'CodePath',
    role: 'Member',
    emoji: '💡',
    accent: '#FFCC2F',
  },
  {
    id: 'acm',
    organization: 'Association for Computing Machinery (ACM)',
    role: 'Member',
    emoji: '⚙️',
    accent: '#00C48C',
  },
  {
    id: 'nsa',
    organization: 'Nepalese Student Association',
    role: 'Member',
    emoji: '🇳🇵',
    accent: '#DC143C',
  },
];

export default function Affiliations() {
  const containerRef = useRef<HTMLDivElement>(null);
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
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-6 lg:px-12">
      <div
        ref={containerRef}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Involvement</span>
          <h2
            className="font-heading font-black text-[#111111] mt-4"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            Organizational Affiliations
          </h2>
          <p className="text-[#888888] mt-4 max-w-xl mx-auto">
            Communities and organizations I am actively engaged with.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {affiliations.map((affiliation, index) => (
            <div
              key={affiliation.id}
              className={`card-light card-light-hover p-6 flex items-center gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Emoji icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: `${affiliation.accent}18` }}
              >
                {affiliation.emoji}
              </div>

              <div>
                <h4 className="font-heading text-base font-bold text-[#111111] leading-snug">
                  {affiliation.organization}
                </h4>
                <span
                  className="font-mono text-xs uppercase tracking-wider font-medium"
                  style={{ color: affiliation.accent }}
                >
                  {affiliation.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
