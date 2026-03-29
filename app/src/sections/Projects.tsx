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
  cta?: string;
  tagClass?: string;
}

const projects: Project[] = [
  {
    id: 'codesense',
    title: 'CodeSense',
    description:
      'AI-powered code review assistant built solo — React/TypeScript frontend on Cloudflare Pages with a Hono-routed Worker backend. Architected a 4-step execution pipeline using Cloudflare Workflows and integrated Llama 3.3 70B via Workers AI for structured bug, security, and performance analysis. Implemented per-session persistent memory using Durable Objects.',
    tags: ['React', 'TypeScript', 'Cloudflare', 'Hono'],
    image: '/project_codesense.png',
    featured: true,
    cta: 'View project',
    tagClass: 'tag tag-dark',
  },
  {
    id: 'carbon-horizon',
    title: 'Carbon Horizon',
    description:
      'AI-powered climate platform for emissions tracking and CCUS insights. Built with React and GraphQL, querying and visualizing 72,000+ Climate TRACE emissions records across multiple sectors. Placed 1st at the DevDays ClimateTech Challenge.',
    tags: ['React', 'GraphQL', 'AI/ML', 'Data Viz'],
    image: '/project_carbon_v2.png',
    link: 'https://www.ulm.edu/news/2025/comp_science_devdays_111125.html',
    featured: true,
    cta: 'Learn more',
    tagClass: 'tag tag-green',
  },
  {
    id: 'notelinkai',
    title: 'NoteLinkAI',
    description:
      'AI learning platform with smart notes and study assistance. Leverages OpenAI API for intelligent content generation and summarization. Built as part of my internship at CashWise App LLC.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL'],
    image: '/project_notelink_v2.png',
    link: 'https://notelinkai.com',
    featured: true,
    cta: 'See the work',
    tagClass: 'tag tag-purple',
  },
  {
    id: 'nepunite',
    title: 'NepUnite',
    description:
      'Community web platform with a Housing module supporting listings and user interaction. Built full-stack features including listing creation, filtering, and data-driven UI components, alongside backend REST APIs with clean data contracts and validation logic.',
    tags: ['Full-Stack', 'React', 'Next.js', 'REST API'],
    image: '/project_nepUnite.png',
    link: 'https://www.nepunite.com',
    featured: true,
    cta: 'See the work',
    tagClass: 'tag tag-blue',
  },
  {
    id: 'escape-maze',
    title: 'Escape the Virtual Maze',
    description:
      'Educational visual novel teaching programming logic, control flow, and cybersecurity through interactive branching gameplay. Covers loops, logic errors, phishing awareness, and ethical technology use. Awarded 1st Place at the ULM Research & Creative Activity Symposium 2025.',
    tags: ["Ren'Py", 'Game Dev', 'Education', 'Python'],
    image: '/project_maze_v2.png',
    link: 'https://prasannajha401.itch.io/loops',
    tagClass: 'tag tag-yellow',
  },
  {
    id: 'saferoute',
    title: 'SafeRoute',
    description:
      'Crime-aware navigation mobile app with a Django REST Framework backend storing geospatial incident data and a React Native/Expo frontend featuring Google OAuth, an interactive crime map with real-time overlays, and data-driven statistics visualization.',
    tags: ['React Native', 'Expo', 'Django', 'Python'],
    image: '/project_saferoute.png',
    link: 'https://github.com/Prasanna401623/SafeRoute',
    tagClass: 'tag tag-dark',
  },
  {
    id: 'gunhand',
    title: 'GunHand',
    description:
      'Gesture-controlled browser game using Google MediaPipe for real-time hand tracking — open-palm maps to crosshair movement, closed-fist fires via synthetic mouse events. Split deployment with Vue 3 on Netlify and a Node.js/Express backend on Render serving a global high-score leaderboard API. Awarded 2nd Place at the ULM Honors Symposium 2026.',
    tags: ['Vue 3', 'Node.js', 'MediaPipe', 'JavaScript'],
    image: '/project_gunhand.png',
    tagClass: 'tag tag-green',
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
                {project.cta ?? 'View project'}
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
