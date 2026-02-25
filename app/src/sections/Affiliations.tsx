import { useEffect, useRef, useState } from 'react';

interface AffiliationItem {
  id: string;
  organization: string;
  role: string;
}

const affiliations: AffiliationItem[] = [
  {
    id: 'gdsc',
    organization: 'Google Developer Student Clubs (GDSC)',
    role: 'Technical Lead',
  },
  {
    id: 'codepath',
    organization: 'CodePath',
    role: 'Member',
  },
  {
    id: 'acm',
    organization: 'Association for Computing Machinery (ACM)',
    role: 'Member',
  },
  {
    id: 'nsa',
    organization: 'Nepalese Student Association (NSA)',
    role: 'Member',
  },
];

export default function Affiliations() {
  const containerRef = useRef<HTMLDivElement>(null);
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

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative px-6 lg:px-12" id="affiliations">
      <div
        ref={containerRef}
        className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-[#6366F1] tracking-widest uppercase">
            Involvement
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#FAFAFA] mt-4">
            Organizational <span className="text-gradient">Affiliations</span>
          </h2>
          <p className="text-[#A1A1AA] mt-4 max-w-2xl mx-auto">
            Communities and organizations I am actively engaged with.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {affiliations.map((affiliation) => (
            <div key={affiliation.id} className="glass-card p-6 flex flex-col justify-center items-center text-center transition-all hover:-translate-y-1 hover:border-[#6366F1]/30">
              <h4 className="font-heading text-lg font-semibold text-[#FAFAFA] mb-2">
                {affiliation.organization}
              </h4>
              <span className="text-[#6366F1] font-mono text-sm uppercase tracking-wider">
                {affiliation.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
