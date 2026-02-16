import { useEffect, useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div ref={sectionRef} className="relative px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-mono text-sm text-[#6366F1] tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#FAFAFA] mt-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-[#A1A1AA] mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll respond within 2-3 days.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 lg:p-8">
              <div className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block font-mono text-sm text-[#A1A1AA] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#FAFAFA]/5 border border-[#FAFAFA]/10 rounded-xl text-[#FAFAFA] placeholder-[#71717A] focus:border-[#6366F1] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block font-mono text-sm text-[#A1A1AA] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#FAFAFA]/5 border border-[#FAFAFA]/10 rounded-xl text-[#FAFAFA] placeholder-[#71717A] focus:border-[#6366F1] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block font-mono text-sm text-[#A1A1AA] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#FAFAFA]/5 border border-[#FAFAFA]/10 rounded-xl text-[#FAFAFA] placeholder-[#71717A] focus:border-[#6366F1] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : submitted ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-4">
              {/* Email */}
              <a 
                href="mailto:prasanna@email.edu"
                className="glass-card p-5 flex items-center gap-4 group hover:bg-[#6366F1]/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/20 flex items-center justify-center">
                  <Mail size={20} className="text-[#6366F1]" />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#71717A] mb-1">Email</div>
                  <div className="text-[#FAFAFA] group-hover:text-[#6366F1] transition-colors">
                    prasanna@email.edu
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/prasannajha"
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
                    github.com/prasannajha
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/prasannajha"
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
                    linkedin.com/in/prasannajha
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
