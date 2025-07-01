import { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ashishsahoo-code', label: 'GitHub' },
    { icon: Linkedin, href: 'http://linkedin.com/in/ashish-sahoo-651918216', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ashishk16000293?s=21', label: 'Twitter' }
  ];

  const contactInfo = [
    { icon: Mail, value: 'ashishsahoo218@gmail.com', href: 'mailto:ashishsahoo218@gmail.com' },
    { icon: Phone, value: '+91 7735868313', href: 'tel:+917735868313' },
    { 
      icon: MapPin, 
      value: 'Bhubaneswar, Odisha', 
      href: 'https://www.google.com/maps/place/Bhubaneswar,+Odisha' 
    }
  ];
  
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Let's Work Together</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-neon-blue" size={28} />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cyber-glass border border-cyber-glass-border 
                             focus:border-neon-blue focus:outline-none transition-colors duration-300
                             placeholder-gray-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cyber-glass border border-cyber-glass-border 
                             focus:border-neon-blue focus:outline-none transition-colors duration-300
                             placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-cyber-glass border border-cyber-glass-border 
                             focus:border-neon-blue focus:outline-none transition-colors duration-300
                             placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cyber w-full flex items-center justify-center gap-2 py-4 text-lg font-semibold
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon-purple">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-cyber-glass 
                               transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-teal 
                                    flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon size={20} />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {item.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon-teal">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-cyber-glass to-transparent 
                               border border-cyber-glass-border flex items-center justify-center
                               hover:scale-110 hover:border-neon-blue transition-all duration-300 neon-glow"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 mt-4">
                  Follow me for updates, tutorials, and behind-the-scenes content
                </p>
              </div>

              {/* Resume Download */}
              <div className="glass-card p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-neon-green">Download Resume</h3>
                <p className="text-gray-400 mb-6">
                  Get a detailed overview of my experience and skills
                </p>
                <a
                  href="/Ashish_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="btn-cyber inline-flex items-center gap-2 px-6 py-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
