import { ArrowDown, Download, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-on-scroll">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Ashish Sahoo</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
            Creative Full-Stack Developer
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Crafting futuristic solutions through code and design
          </p>

          {/* Glass card with CTA buttons */}
          <div className="glass-card p-8 max-w-md mx-auto mb-16 animate-float">
            <div className="flex flex-col space-y-4">
              <a
                href="#projects"
                className="btn-cyber w-full flex items-center justify-center gap-2 neon-glow"
              >
                <Github size={20} />
                View My Projects
              </a>

              <a
                href="/Ashish_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber w-full flex items-center justify-center gap-2"
              >
                <Download size={20} />
                View Resume
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-neon-blue" size={32} />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-neon-purple rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-neon-teal rounded-full animate-pulse opacity-30" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-neon-blue rounded-full animate-pulse opacity-30" />
    </section>
  );
};

export default HeroSection;