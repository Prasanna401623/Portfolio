import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
  accent: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'cashwise',
    role: 'Software Engineer Intern',
    company: 'CashWise App LLC',
    period: 'Jan 2026 – Present',
    description:
      'Contributing to NoteLinkAI — an AI-powered productivity platform built with React, TypeScript, and Supabase. I develop client-side features and server-side Edge Functions, integrate AI services and Stripe subscription workflows, and manage secure environment configurations.',
    accent: '#FFCC2F',
  },
  {
    id: 'hawkeye',
    role: 'Web Developer',
    company: 'The Hawkeye',
    period: 'Fall 2024 – Present',
    description:
      'Managing the student newspaper website on the SNO WordPress platform. Improving accessibility, customizing navigation, and streamlining publishing workflows.',
    link: 'https://ulmhawkeyeonline.com/staff_name/prasanna-jha/',
    accent: '#7C3AED',
  },
  {
    id: 'tutor',
    role: 'Tutor',
    company: 'Student Success Center',
    period: 'Jan 2025 – Present',
    description:
      'Teaching mathematics and physics with adaptive explanations. Supporting students through guided problem-solving and exam preparation.',
    link: 'https://www.ulm.edu/studentsuccess/tutoring.html',
    accent: '#00C48C',
  },
  {
    id: 'medicross',
    role: 'IT & Operations Intern',
    company: 'Medicross Humaceuticals',
    period: 'Oct 2022 – Jun 2023',
    description:
      'Assisted with system maintenance, software troubleshooting, and cross-team support. Gained experience applying technical knowledge in a business environment.',
    accent: '#888888',
  },
];

interface CardProps {
  item: ExperienceItem;
  index: number;
}

function ExperienceCard({ item, index }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="card-light card-light-hover p-7 lg:p-8 flex gap-5 lg:gap-6">
        {/* Accent bar */}
        <div
          className="w-1 flex-shrink-0 rounded-full"
          style={{ backgroundColor: item.accent, minHeight: '100%' }}
        />

        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
            <div>
              <h3 className="font-heading text-lg font-bold text-[#111111]">
                {item.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-medium hover:underline transition-all"
                    style={{ color: item.accent }}
                  >
                    {item.company}
                  </a>
                ) : (
                  <span className="font-mono text-sm font-medium" style={{ color: item.accent }}>
                    {item.company}
                  </span>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AAAAAA] hover:text-[#111111] transition-colors"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>

            <span className="flex-shrink-0 font-mono text-xs text-[#888888] bg-[#F7F7F5] px-3 py-1 rounded-full border border-[#E8E8E8]">
              {item.period}
            </span>
          </div>

          <p className="text-[#555555] text-sm leading-relaxed mt-3">
            {item.description}
          </p>
        </div>
      </div>
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
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Journey</span>
          <h2
            className="font-heading font-black text-[#111111] mt-4"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            Work Experience
          </h2>
          <p className="text-[#888888] mt-4 max-w-xl mx-auto">
            My professional journey through internships, leadership roles, and technical positions.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-4 lg:space-y-5">
          {experiences.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
