import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  emoji: string;
  title: string;
  description: string;
  skills: string[];
  cta: string;
  ctaTarget: string;
  accent: string;
  tagClass: string;
}

const services: Service[] = [
  {
    id: 'fullstack',
    emoji: '🖥️',
    title: 'Full-Stack Development',
    description:
      'I build end-to-end web applications — from polished React frontends to robust Node.js / Supabase backends. I handle auth, APIs, databases, and deployments.',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'REST APIs'],
    cta: 'See my projects',
    ctaTarget: 'projects',
    accent: '#FFCC2F',
    tagClass: 'tag tag-yellow',
  },
  {
    id: 'ai',
    emoji: '🤖',
    title: 'AI & Machine Learning',
    description:
      'I integrate LLMs and build ML-powered features — from OpenAI-backed study tools to real-time anomaly detection and NLP pipelines using Python and Pandas.',
    skills: ['Python', 'OpenAI API', 'Pandas', 'ML Fundamentals', 'Data Analysis', 'NLP'],
    cta: 'Explore AI projects',
    ctaTarget: 'projects',
    accent: '#7C3AED',
    tagClass: 'tag tag-purple',
  },
  {
    id: 'open',
    emoji: '🚀',
    title: 'Open to Opportunities',
    description:
      "I'm looking for internships, research collaborations, and exciting side projects. If you're building something interesting \u2014 let's talk.",
    skills: ['Internships', 'Research', 'Hackathons', 'Open Source', 'Freelance'],
    cta: 'Get in touch',
    ctaTarget: 'contact',
    accent: '#00C48C',
    tagClass: 'tag tag-green',
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
  onNavigate: (id: string) => void;
}

function ServiceCard({ service, index, onNavigate }: ServiceCardProps) {
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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="card-light card-light-hover p-8 h-full flex flex-col group">
        {/* Emoji icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${service.accent}20` }}
        >
          {service.emoji}
        </div>

        <h3 className="font-heading text-xl font-bold text-[#111111] mb-3">
          {service.title}
        </h3>

        <p className="text-[#555555] text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.skills.map((skill) => (
            <span key={skill} className={service.tagClass}>
              {skill}
            </span>
          ))}
        </div>

        {/* CTA link */}
        <button
          onClick={() => onNavigate(service.ctaTarget)}
          className="flex items-center gap-1.5 font-heading text-sm font-bold text-[#111111] hover:gap-3 transition-all"
          style={{ color: service.accent === '#FFCC2F' ? '#111111' : service.accent }}
        >
          {service.cta}
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

interface SkillsProps {
  onNavigate?: (id: string) => void;
}

export default function Skills({ onNavigate }: SkillsProps) {
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

  const navigate = onNavigate ?? ((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  });

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
          <span className="section-label">Capabilities</span>
          <h2
            className="font-heading font-black text-[#111111] mt-4"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            What I can do for you
          </h2>
          <p className="text-[#888888] mt-4 max-w-xl mx-auto">
            A practical skill set built across courses, internships, and real-world projects.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onNavigate={navigate}
            />
          ))}
        </div>

        {/* Tech tags row */}
        <div
          className={`mt-14 pt-10 border-t border-[#E8E8E8] transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label text-center mb-5">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Python', 'Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'Git', 'GitHub',
              'Figma', 'Firebase', 'WordPress', 'React Native', 'Django', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="tag tag-dark">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
