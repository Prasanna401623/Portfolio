import { useEffect, useRef, useState } from 'react';
import { Code2, BookOpen, Cpu, Globe } from 'lucide-react';

interface AffiliationItem {
  id: string;
  organization: string;
  role: string;
  icon: React.ReactNode;
  accent: string;
}

const affiliations: AffiliationItem[] = [
  {
    id: 'gdsc',
    organization: 'Google Developer Student Clubs',
    role: 'Internal Vice President',
    icon: <Code2 size={20} strokeWidth={1.75} />,
    accent: '#4285F4',
  },
  {
    id: 'codepath',
    organization: 'CodePath',
    role: 'Member',
    icon: <BookOpen size={20} strokeWidth={1.75} />,
    accent: '#FFCC2F',
  },
  {
    id: 'acm',
    organization: 'Association for Computing Machinery (ACM)',
    role: 'Member',
    icon: <Cpu size={20} strokeWidth={1.75} />,
    accent: '#00C48C',
  },
  {
    id: 'nsa',
    organization: 'Nepalese Student Association',
    role: 'Member',
    icon: <Globe size={20} strokeWidth={1.75} />,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {affiliations.map((affiliation, index) => (
            <div
              key={affiliation.id}
              className={`card-light card-light-hover p-6 flex items-center gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${affiliation.accent}18`,
                  color: affiliation.accent === '#FFCC2F' ? '#8a6d00' : affiliation.accent,
                }}
              >
                {affiliation.icon}
              </div>

              <div>
                <h4 className="font-heading text-base font-bold text-[#111111] leading-snug">
                  {affiliation.organization}
                </h4>
                <span
                  className="font-mono text-xs uppercase tracking-wider font-medium"
                  style={{ color: affiliation.accent === '#FFCC2F' ? '#8a6d00' : affiliation.accent }}
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
