import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  featured?: boolean;
  tagClass?: string;
}

const projects: Project[] = [
  {
    id: 'carbon-horizon',
    title: 'Carbon Horizon',
    description:
      'AI-powered climate platform for emissions tracking and CCUS insights. Built with React and Python, featuring real-time data visualization and anomaly detection.',
    tags: ['React', 'Python', 'AI/ML', 'Data Viz'],
    image: '/project_carbon_v2.png',
    link: 'https://www.ulm.edu/news/2025/comp_science_devdays_111125.html',
    featured: true,
    tagClass: 'tag tag-green',
  },
  {
    id: 'notelinkai',
    title: 'NoteLinkAI',
    description:
      'AI learning platform with smart notes and study assistance. Leverages OpenAI API for intelligent content generation and summarization.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL'],
    image: '/project_notelink_v2.png',
    link: 'https://notelinkai.com',
    featured: true,
    tagClass: 'tag tag-purple',
  },
  {
    id: 'saferoute',
    title: 'SafeRoute',
    description:
      'Full-stack mobile safety app with real-time GPS-based risk scoring, NLP severity classification, and automated crime data ingestion via OpenAI GPT.',
    tags: ['React Native', 'Django', 'OpenAI API', 'Google Maps'],
    image: '/project_saferoute.png',
    link: 'https://github.com/Prasanna401623/SafeRoute',
    featured: true,
    tagClass: 'tag tag-blue',
  },
  {
    id: 'escape-maze',
    title: 'Escape the Virtual Maze',
    description:
      'Educational visual novel game teaching programming and cybersecurity through interactive storytelling and decision-based gameplay.',
    tags: ["Ren'Py", 'Game Dev', 'Education', 'Python'],
    image: '/project_maze_v2.png',
    link: 'https://prasannajha401.itch.io/loops',
    tagClass: 'tag tag-yellow',
  },
  {
    id: 'nepunite',
    title: 'NepUnite',
    description:
      'Community web platform with a Housing module supporting listings and user interaction. Contributed to frontend and backend development.',
    tags: ['Full-Stack', 'React', 'Community', 'Web Platform'],
    image: '/project_nepUnite.png',
    link: 'https://www.nepunite.com',
    tagClass: 'tag tag-dark',
  },
];

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

/* ── Featured card (horizontal, large) ───────────────────────── */
function FeaturedCard({ project, index }: { project: Project; index: number }) {
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

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="card-light card-light-hover overflow-hidden">
        <div className={`grid lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-dense'}`}>

          {/* Image */}
          <div
            className={`relative h-56 lg:h-72 overflow-hidden bg-[#F0F0F0] ${
              !isEven ? 'lg:col-start-2' : ''
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className={project.tagClass ?? 'tag tag-dark'}>
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#111111] mb-3">
              {project.title}
            </h3>

            <p className="text-[#555555] text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-[#111111] hover:gap-3 transition-all"
              >
                See full case study
                <ArrowRight size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Small card ───────────────────────────────────────────────── */
function SmallCard({ project, index }: { project: Project; index: number }) {
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
      <div className="card-light card-light-hover overflow-hidden group h-full flex flex-col">
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-[#F0F0F0]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#111111] opacity-0 group-hover:opacity-100 transition-all shadow-sm hover:bg-white"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className={project.tagClass ?? 'tag tag-dark'}>
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-heading text-lg font-bold text-[#111111] mb-2">
            {project.title}
          </h3>
          <p className="text-[#555555] text-sm leading-relaxed flex-grow">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────────── */
export default function Projects() {
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
          <span className="section-label">Portfolio</span>
          <h2
            className="font-heading font-black text-[#111111] mt-4"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            Featured projects
          </h2>
          <p className="text-[#888888] mt-4 max-w-xl mx-auto">
            A selection of work spanning AI-powered platforms, mobile apps, and developer tools.
          </p>
        </div>

        {/* Featured */}
        <div className="space-y-6 lg:space-y-8 mb-16 lg:mb-20">
          {featured.map((project, index) => (
            <FeaturedCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other projects header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3
            className="font-heading font-bold text-[#111111]"
            style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}
          >
            Other projects
          </h3>
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {others.map((project, index) => (
            <SmallCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
