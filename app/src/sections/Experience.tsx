import { useEffect, useRef, useState } from 'react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'gdsc',
    role: 'Technical Lead',
    company: 'GDSC ULM',
    period: 'Aug 2025 – Present',
    description: 'Leading technical workshops and mentoring developers. Organizing hackathons and coding challenges, ensuring technical readiness for events like TechExpo.',
  },
  {
    id: 'hawkeye',
    role: 'Digital Editor / Web Master',
    company: 'The Hawkeye',
    period: 'Fall 2024 – Present',
    description: 'Managing the student newspaper website on SNO WordPress platform. Improving accessibility, customizing navigation, and streamlining publishing workflows.',
  },
  {
    id: 'tutor',
    role: 'Tutor',
    company: 'Student Success Center',
    period: 'Jan 2025 – Present',
    description: 'Teaching mathematics and physics courses with adaptive explanations. Supporting students through guided problem-solving and exam preparation.',
  },
  {
    id: 'medicross',
    role: 'IT & Operations Intern',
    company: 'Medicross Humaceuticals',
    period: 'Oct 2022 – Jun 2023',
    description: 'Assisted with system maintenance, software troubleshooting, and cross-team support. Gained experience applying technical knowledge in a business environment.',
  },
];

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isLeft: boolean;
}

function ExperienceCard({ experience, index, isLeft }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:items-stretch gap-8 lg:gap-0`}
    >
      {/* Content Card */}
      <div 
        className={`lg:w-[45%] transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : `opacity-0 ${isLeft ? '-translate-x-12' : 'translate-x-12'}`
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="glass-card p-6 lg:p-8 h-full">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="font-heading text-lg lg:text-xl font-semibold text-[#FAFAFA]">
              {experience.role}
            </h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[#6366F1] font-mono text-sm">
              {experience.company}
            </span>
            <span className="text-[#71717A]">•</span>
            <span className="text-[#71717A] font-mono text-sm">
              {experience.period}
            </span>
          </div>
          
          <p className="text-[#A1A1AA] text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>

      {/* Timeline Center */}
      <div className="hidden lg:flex lg:w-[10%] justify-center relative">
        <div className="w-px h-full bg-gradient-to-b from-[#6366F1]/50 via-[#8B5CF6]/50 to-[#6366F1]/50" />
        <div 
          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#6366F1] border-4 border-[#0F0F12] transition-all duration-500 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        />
      </div>

      {/* Empty Space for alternating layout */}
      <div className="hidden lg:block lg:w-[45%]" />
    </div>
  );
}

export default function Experience() {
  const titleRef = useRef<HTMLDivElement>(null);
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

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-mono text-sm text-[#6366F1] tracking-widest uppercase">
            Journey
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#FAFAFA] mt-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-[#A1A1AA] mt-4 max-w-2xl mx-auto">
            My professional journey through internships, leadership roles, and technical positions.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 lg:space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
