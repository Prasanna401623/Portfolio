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
      'At CashWise App LLC, I work on NoteLinkAI — an AI-powered study platform built with React, TypeScript, and Supabase. I develop full-stack features across the client and Supabase Edge Functions, integrate OpenAI APIs for intelligent note assistance and content generation, and own the end-to-end Stripe subscription and payment workflows. I also configured Sentry for real-time error tracking and contributed to GitHub Actions CI/CD pipelines to keep deployments fast and reliable.',
    accent: '#FFCC2F',
  },
  {
    id: 'hawkeye',
    role: 'Web Developer',
    company: 'The Hawkeye, ULM',
    period: 'Fall 2024 – Present',
    description:
      "As Web Developer for The Hawkeye — ULM's student newspaper — I manage the publication's website on the SNO WordPress platform. I publish and organize news and sports content while maintaining AP style standards, customize site navigation and multimedia widgets to improve reader accessibility and engagement, and collaborate with editors, writers, and faculty advisors to resolve technical issues and support digital coverage of campus events and athletics.",
    link: 'https://ulmhawkeyeonline.com/staff_name/prasanna-jha/',
    accent: '#7C3AED',
  },
  {
    id: 'tutor',
    role: 'Tutor',
    company: 'Student Success Center, ULM',
    period: 'Jan 2025 – Present',
    description:
      "At ULM's Student Success Center, I tutor students in mathematics and physics — MATH 1013, 1031, 1032, PHYS 2003, and PHYS 2004. I break down complex quantitative concepts into clear, approachable steps and adapt my teaching style to each student's individual learning needs, balancing tutoring responsibilities with my own coursework while following SSC professional guidelines.",
    link: 'https://www.ulm.edu/studentsuccess/tutoring.html',
    accent: '#00C48C',
  },
  {
    id: 'gdsc',
    role: 'Technical Lead',
    company: 'Google Developer Student Club (GDSC), ULM',
    period: 'Aug 2025 – Present',
    description:
      "As Technical Lead of ULM's Google Developer Student Club, I plan and run technical workshops, hackathons, and student-led projects centered on software development and applied technologies. I mentor members across all experience levels — guiding them through best practices, tooling choices, and problem-solving approaches — and collaborate with club leadership to design hands-on learning experiences for events like TechExpo and coding challenges.",
    accent: '#4285F4',
  },
  {
    id: 'medicross',
    role: 'IT & Operations Intern',
    company: 'Medicross Humaceuticals',
    period: 'Oct 2022 – Jun 2023',
    description:
      'At Medicross Humaceuticals, I assisted with system maintenance, software troubleshooting, and internal technical support for day-to-day operations. I supported cross-team documentation, data organization, and process assistance tasks, gaining early real-world experience applying technical knowledge alongside non-technical stakeholders in a professional business environment.',
    accent: '#888888',
  },
];

interface CardProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

function ExperienceCard({ item, index, isLast }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative flex gap-6 lg:gap-8"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0 w-6">
        {/* Dot */}
        <div
          className={`w-4 h-4 rounded-full border-2 border-white flex-shrink-0 mt-6 transition-all duration-500 shadow-sm ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{
            backgroundColor: item.accent,
            transitionDelay: `${index * 120 + 100}ms`,
          }}
        />
        {/* Connecting line */}
        {!isLast && (
          <div
            className={`flex-1 w-px mt-2 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `linear-gradient(to bottom, ${item.accent}60, #E8E8E8)`,
              transitionDelay: `${index * 120 + 200}ms`,
              minHeight: '2rem',
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className={`flex-1 mb-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
        }`}
        style={{ transitionDelay: `${index * 120}ms` }}
      >
        <div className="card-light card-light-hover p-6 lg:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-heading text-lg font-bold text-[#111111]">
                {item.role}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-medium hover:underline transition-all flex items-center gap-1"
                    style={{ color: item.accent === '#FFCC2F' ? '#8a6d00' : item.accent }}
                  >
                    {item.company}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span
                    className="font-mono text-sm font-medium"
                    style={{ color: item.accent === '#FFCC2F' ? '#8a6d00' : item.accent }}
                  >
                    {item.company}
                  </span>
                )}
              </div>
            </div>

            <span className="flex-shrink-0 font-mono text-xs text-[#888888] bg-[#F7F7F5] px-3 py-1 rounded-full border border-[#E8E8E8]">
              {item.period}
            </span>
          </div>

          <p className="text-[#555555] text-sm leading-relaxed">
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

        <div className="pl-0">
          {experiences.map((item, index) => (
            <ExperienceCard
              key={item.id}
              item={item}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
