import { useEffect, useRef, useState } from 'react';
import { Trophy, GraduationCap, Award, Flame } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  icon: 'trophy' | 'graduation' | 'award' | 'flame';
}

const achievements: Achievement[] = [
  {
    id: 'presidents-list',
    title: "President's List — 5 Semesters",
    organization: 'University of Louisiana at Monroe',
    description:
      'Maintained a perfect 4.0 GPA across five consecutive semesters, earning a spot on the President\'s List each term.',
    icon: 'graduation',
  },
  {
    id: 'devdays-2025',
    title: 'Nexus First DevDays: Climate Tech 2025 — Winner',
    organization: 'Nexus First / ULM',
    description:
      'Won the inaugural DevDays hackathon focused on climate technology, building Carbon Horizon — an AI-powered emissions tracking platform.',
    icon: 'flame',
  },
  {
    id: 'symposium-2025',
    title: 'ULM Symposium 2025 — Poster Presentation Winner',
    organization: 'University of Louisiana at Monroe',
    description:
      'Awarded first place for a poster presentation showcasing research and development work at the annual ULM Symposium.',
    icon: 'award',
  },
  {
    id: 'techxpo-2024',
    title: 'ULM TechXpo 2024 — Best Domain Award',
    organization: 'University of Louisiana at Monroe',
    description:
      'Recognized with the Best Domain Award at TechXpo 2024 for outstanding project execution and domain expertise.',
    icon: 'trophy',
  },
];

const iconMap = {
  trophy: Trophy,
  graduation: GraduationCap,
  award: Award,
  flame: Flame,
};

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

function AchievementCard({ achievement, index }: AchievementCardProps) {
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
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const IconComponent = iconMap[achievement.icon];

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass-card p-6 lg:p-8 card-hover group h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center mb-5 group-hover:bg-[#6366F1]/20 transition-all duration-300">
          <IconComponent size={22} className="text-[#6366F1]" />
        </div>

        {/* Content */}
        <h3 className="font-heading text-lg font-semibold text-[#FAFAFA] mb-2 group-hover:text-gradient transition-all">
          {achievement.title}
        </h3>

        <span className="text-[#6366F1] font-mono text-xs tracking-wide uppercase mb-3">
          {achievement.organization}
        </span>

        <p className="text-[#A1A1AA] text-sm leading-relaxed mt-auto">
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
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="font-mono text-sm text-[#6366F1] tracking-widest uppercase">
            Recognition
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#FAFAFA] mt-4">
            Achievements & <span className="text-gradient">Awards</span>
          </h2>
          <p className="text-[#A1A1AA] mt-4 max-w-2xl mx-auto">
            Milestones and recognitions earned through academics, competitions, and hackathons.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
