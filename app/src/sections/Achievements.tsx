import { useEffect, useRef, useState } from 'react';
import { Trophy, GraduationCap, Award, Flame } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  icon: 'trophy' | 'graduation' | 'award' | 'flame';
  accent: string;
  bgColor: string;
}

const achievements: Achievement[] = [
  {
    id: 'presidents-list',
    title: "President's List, 6 Consecutive Semesters",
    organization: 'University of Louisiana at Monroe',
    description:
      'Maintained a perfect 4.0 GPA across six consecutive semesters, earning a spot on the President\'s List each term.',
    icon: 'graduation',
    accent: '#00C48C',
    bgColor: '#D1FAE5',
  },
  {
    id: 'devdays-2025',
    title: 'Winner, Nexus First DevDays: Climate Tech 2025',
    organization: 'Nexus First / ULM',
    description:
      'Won the inaugural DevDays hackathon focused on climate technology, building Carbon Horizon, an AI-powered emissions tracking platform.',
    icon: 'flame',
    accent: '#FFCC2F',
    bgColor: '#FFF3B0',
  },
  {
    id: 'symposium-2025',
    title: 'Poster Presentation Winner, ULM Symposium 2025',
    organization: 'University of Louisiana at Monroe',
    description:
      'Awarded first place for a poster presentation showcasing research and development work at the annual ULM Symposium.',
    icon: 'award',
    accent: '#7C3AED',
    bgColor: '#EDE9FE',
  },
  {
    id: 'techxpo-2024',
    title: 'Best Domain Award, ULM TechXpo 2024',
    organization: 'University of Louisiana at Monroe',
    description:
      'Recognized with the Best Domain Award at TechXpo 2024 for outstanding project execution and domain expertise.',
    icon: 'trophy',
    accent: '#F59E0B',
    bgColor: '#FEF3C7',
  },
];

const iconMap = {
  trophy: Trophy,
  graduation: GraduationCap,
  award: Award,
  flame: Flame,
};

interface CardProps {
  achievement: Achievement;
  index: number;
}

function AchievementCard({ achievement, index }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = iconMap[achievement.icon];

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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="card-light card-light-hover p-7 lg:p-8 h-full flex flex-col group">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: achievement.bgColor }}
        >
          <Icon size={22} style={{ color: achievement.accent }} />
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-[#111111] mb-1 leading-snug">
          {achievement.title}
        </h3>

        {/* Org */}
        <span
          className="font-mono text-xs uppercase tracking-wider mb-3"
          style={{ color: achievement.accent }}
        >
          {achievement.organization}
        </span>

        {/* Description */}
        <p className="text-[#555555] text-sm leading-relaxed mt-auto">
          {achievement.description}
        </p>
      </div>
    </div>
  );
}

export default function Achievements() {
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Recognition</span>
          <h2
            className="font-heading font-black text-[#111111] mt-4"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            Achievements & Awards
          </h2>
          <p className="text-[#888888] mt-4 max-w-xl mx-auto">
            Milestones earned through academics, competitions, and hackathons.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
