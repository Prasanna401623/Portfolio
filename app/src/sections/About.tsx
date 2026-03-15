import { useEffect, useRef, useState } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, suffix, label, delay }: StatProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) setIsVisible(true);
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeOut * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    const t = setTimeout(() => requestAnimationFrame(animate), delay);
    return () => clearTimeout(t);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`card-light card-light-hover p-8 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-heading font-black text-[#111111]" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
        {displayValue}<span className="text-[#FFCC2F]">{suffix}</span>
      </div>
      <div className="section-label mt-2">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="section-label">About Me</span>

            <h2
              className="font-heading font-black text-[#111111] mt-4 mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              Passionate about building{' '}
              <span className="relative inline-block">
                impactful
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FFCC2F]/50 -z-10 rounded-sm" />
              </span>{' '}
              solutions.
            </h2>

            <p className="text-[#555555] text-base leading-relaxed mb-4">
              I'm a Computer Science student at the University of Louisiana at Monroe
              with a minor in Mathematics. I specialize in full-stack development,
              data analysis, and applied machine learning.
            </p>

            <p className="text-[#888888] text-base leading-relaxed mb-8">
              From leading technical workshops to building AI-powered platforms,
              I'm always exploring new technologies and pushing boundaries.
              Expected graduation: <span className="text-[#111111] font-semibold">Spring 2027</span>.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Team Leader', 'Lifelong Learner', '4.0 GPA'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-[#F7F7F5] border border-[#E8E8E8] text-[#555555] font-mono text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <AnimatedStat value={4}  suffix="+" label="Years Coding"       delay={0} />
              <AnimatedStat value={8}  suffix="+" label="Projects Built"     delay={100} />
              <AnimatedStat value={3}  suffix=""  label="Leadership Roles"   delay={200} />
              <AnimatedStat value={5}  suffix=""  label="Semesters on President's List" delay={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
