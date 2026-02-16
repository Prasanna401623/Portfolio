import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 'carbon-horizon',
    title: 'Carbon Horizon',
    description: 'AI-powered climate platform for emissions tracking and CCUS insights. Built with React and Python, featuring real-time data visualization and anomaly detection.',
    tags: ['React', 'Python', 'AI/ML', 'Data Viz'],
    image: '/project_carbon_v2.jpg',
    link: 'https://news.nexusla.org/431568-university-of-louisiana-at-monroe-team-wins-nexus-louisianas-devdays-climatetech-challenge',
  },
  {
    id: 'notelinkai',
    title: 'NoteLinkAI',
    description: 'AI learning platform with smart notes and study assistance. Leverages OpenAI API for intelligent content generation and summarization.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL'],
    image: '/project_notelink_v2.jpg',
    link: 'https://notelinkai.com',
  },
  {
    id: 'escape-maze',
    title: 'Escape the Virtual Maze',
    description: 'Educational visual novel game teaching programming and cybersecurity concepts through interactive storytelling and decision-based gameplay.',
    tags: ["Ren'Py", 'Game Dev', 'Education', 'Python'],
    image: '/project_maze_v2.jpg',
    link: 'https://prasannajha401.itch.io/loops',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
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

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass-card overflow-hidden card-hover group h-full">
        {/* Image */}
        <div className="relative h-48 lg:h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-transparent" />

          {/* Link Icon */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#6366F1]/20 backdrop-blur-sm flex items-center justify-center text-[#FAFAFA] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#6366F1]"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-semibold text-[#FAFAFA] mb-2 group-hover:text-gradient transition-all">
            {project.title}
          </h3>

          <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] font-mono text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
            Portfolio
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#FAFAFA] mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-[#A1A1AA] mt-4 max-w-2xl mx-auto">
            A selection of projects I've worked on, from AI-powered platforms to educational games.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
