import { motion } from 'framer-motion';

import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  
  const projects = [
    {
      id: 1,
      title: 'Inventory Management System',
      description: 'A desktop-based Java application for managing inventory, tracking stock, and generating reports.',
      image: 'https://images.unsplash.com/photo-1675388773022-e82caedee672?fit=crop&w=600&h=400',
      tech: ['Java', 'MySQL', 'Swing'],
      github: 'https://github.com/ashishsahoo-code/',
      demo: 'https://github.com/ashishsahoo-code/InventorySystem'
    },
    {
      id: 2,
      title: 'Customer Churn Prediction',
      description: 'A machine learning model predicting customer churn using classification algorithms and scikit-learn.',
      image: 'https://plus.unsplash.com/premium_vector-1742024569158-0165f0c4701e?fit=crop&w=600&h=400',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
      github: 'https://github.com/ashishsahoo-code/',
      demo: 'https://github.com/ashishsahoo-code/customer-churn-prediction'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing skills, projects, and contact details with a futuristic glassmorphism theme.',
      image: 'https://plus.unsplash.com/premium_photo-1722729629224-4397a1ce8267?fit=crop&w=600&h=400',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/ashishsahoo-code',
      demo: 'https://github.com/ashishsahoo-code/Portfolio_web'
    }
  ];


  return (
    <motion.section id="projects" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card overflow-hidden group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-cyber-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      className="btn-cyber p-3 hover:scale-110 transition-transform"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="btn-cyber p-3 hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gradient">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyber-glass border border-cyber-glass-border rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-neon-blue hover:text-neon-purple transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-neon-teal hover:text-neon-green transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
