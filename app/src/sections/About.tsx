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
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * value);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`glass-card p-6 lg:p-8 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-gradient">
        {displayValue}{suffix}
      </div>
      <div className="font-mono text-sm text-[#A1A1AA] mt-2">
        {label}
      </div>
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
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="font-mono text-sm text-[#6366F1] tracking-widest uppercase">
              About Me
            </span>
            
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-[#FAFAFA] mt-4 mb-6 leading-tight">
              Passionate about building{' '}
              <span className="text-gradient">impactful</span> solutions
            </h2>
            
            <p className="text-[#A1A1AA] leading-relaxed mb-4">
              I'm a Computer Science student at the University of Louisiana at Monroe 
              with a minor in Mathematics. I specialize in full-stack development, 
              data analysis, and applied machine learning.
            </p>
            
            <p className="text-[#71717A] leading-relaxed mb-6">
              From leading technical workshops to building AI-powered platforms, 
              I'm always exploring new technologies and pushing boundaries. 
              Expected graduation: Spring 2027.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] font-mono text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] font-mono text-sm">
                Team Leader
              </span>
              <span className="px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] font-mono text-sm">
                Lifelong Learner
              </span>
            </div>
          </div>

          {/* Right Stats */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="grid grid-cols-1 gap-4">
              <AnimatedStat value={4} suffix="+" label="Years Experience" delay={0} />
              <AnimatedStat value={8} suffix="+" label="Projects Completed" delay={150} />
              <AnimatedStat value={3} suffix="" label="Leadership Roles" delay={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
