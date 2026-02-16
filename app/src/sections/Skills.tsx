import { useEffect, useRef, useState } from 'react';
import { Code2, Layers, Database, Wrench } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
    color: '#6366F1',
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'Tailwind CSS'],
    color: '#8B5CF6',
  },
  {
    id: 'data',
    title: 'Data & AI',
    icon: Database,
    skills: ['Pandas', 'Data Visualization', 'ML Fundamentals', 'Data Analysis'],
    color: '#6366F1',
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Figma', 'Supabase', 'Firebase', 'WordPress'],
    color: '#8B5CF6',
  },
];

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = category.icon;

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
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card p-6 lg:p-8 h-full card-hover">
        {/* Icon */}
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: `${category.color}20` }}
        >
          <Icon size={24} style={{ color: category.color }} />
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-semibold text-[#FAFAFA] mb-4">
          {category.title}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-lg bg-[#FAFAFA]/5 border border-[#FAFAFA]/10 text-[#A1A1AA] font-mono text-xs hover:bg-[#FAFAFA]/10 hover:text-[#FAFAFA] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-mono text-sm text-[#6366F1] tracking-widest uppercase">
            Toolkit
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#FAFAFA] mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-[#A1A1AA] mt-4 max-w-2xl mx-auto">
            A practical toolkit built across courses, projects, and real-world work.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#71717A] text-sm">
            Always learning new technologies. Currently exploring:{' '}
            <span className="text-[#6366F1]">TypeScript</span>,{' '}
            <span className="text-[#8B5CF6]">Docker</span>, and{' '}
            <span className="text-[#6366F1]">Cloud Services</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
