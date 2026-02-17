import { useEffect, useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Contact() {
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
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="font-mono text-sm text-[#6366F1] tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#FAFAFA] mt-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-[#A1A1AA] mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me an email and I'll respond within 2-3 days.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Me Card */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="glass-card p-8 lg:p-10 flex flex-col items-center justify-center text-center h-full">
              <div className="w-20 h-20 rounded-2xl bg-[#6366F1]/20 flex items-center justify-center mb-6">
                <Mail size={36} className="text-[#6366F1]" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-[#FAFAFA] mb-3">
                Get In Touch
              </h3>
              <p className="text-[#A1A1AA] mb-8 max-w-md">
                Interested in working together or have a question? Click below to send me an email directly.
              </p>
              <a
                href="mailto:Prasannajha623401@gmail.com"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3"
              >
                Contact Me
                <Send size={16} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:Prasannajha623401@gmail.com"
                className="glass-card p-5 flex items-center gap-4 group hover:bg-[#6366F1]/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/20 flex items-center justify-center">
                  <Mail size={20} className="text-[#6366F1]" />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#71717A] mb-1">Email</div>
                  <div className="text-[#FAFAFA] group-hover:text-[#6366F1] transition-colors">
                    Prasannajha623401@gmail.com
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Prasanna401623"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 group hover:bg-[#8B5CF6]/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center">
                  <Github size={20} className="text-[#8B5CF6]" />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#71717A] mb-1">GitHub</div>
                  <div className="text-[#FAFAFA] group-hover:text-[#8B5CF6] transition-colors">
                    github.com/Prasanna401623
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/prasannajha401/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 group hover:bg-[#6366F1]/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/20 flex items-center justify-center">
                  <Linkedin size={20} className="text-[#6366F1]" />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#71717A] mb-1">LinkedIn</div>
                  <div className="text-[#FAFAFA] group-hover:text-[#6366F1] transition-colors">
                    linkedin.com/in/prasannajha401
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAFAFA]/5 flex items-center justify-center">
                  <MapPin size={20} className="text-[#A1A1AA]" />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#71717A] mb-1">Location</div>
                  <div className="text-[#FAFAFA]">
                    Monroe, Louisiana
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
