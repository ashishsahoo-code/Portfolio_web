
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-cyber-darker border-t border-cyber-glass-border">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 
                   bg-gradient-to-br from-neon-blue to-neon-purple rounded-full
                   flex items-center justify-center hover:scale-110 transition-all duration-300
                   neon-glow shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-4">Ashish sahoo</h3>
            <p className="text-gray-400 leading-relaxed">
              Creative Full-Stack Developer crafting innovative digital solutions 
              with modern technologies and cutting-edge design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-neon-blue">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-neon-teal transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-neon-purple">Let's Connect</h4>
            <div className="space-y-2 text-gray-400">
              <p>ashishsahoo218@gmail.com</p>
              <p>+91 7735868313</p>
              <p>Bhubaneswar ,Odisha</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyber-glass-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Ashish Developer. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="text-neon-pink animate-pulse" size={16} />
            <span>by Ashish sahoo</span>
          </div>

          {/* Theme toggle placeholder */}
          <div className="text-gray-400 text-sm">
            Made with React & Tailwind CSS
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-teal" />
    
      <div className="text-center text-sm text-cyber-light py-4">
        <p>📧 <a href="mailto:ashishsahoo218@gmail.com" className="hover:underline">ashishsahoo218@gmail.com</a></p>
        <p>🔗 <a href="http://linkedin.com/in/ashish-sahoo-651918216" target="_blank" className="hover:underline">LinkedIn</a></p>
        <p>💻 <a href="https://github.com/ashishsahoo-code" target="_blank" className="hover:underline">GitHub</a></p>
      </div>

</footer>
  );
};

export default Footer;
