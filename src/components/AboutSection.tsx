import { motion } from 'framer-motion';
import { Code, Heart, Zap } from 'lucide-react';

const AboutSection = () => {
  const techStack = [
    'Java', 'JavaScript', 'Python', 'Spring Boot', 'Hibernate', 'JPA', 'AEM', 'AJO', 'HTML', 'CSS', 'RESTful APIs',
    'MySQL', 'Oracle', 'Cassandra', 'Redis', 'Git', 'Maven', 'Jenkins', 'Postman', 'JIRA', 'Memcache',
    'ElasticSearch', 'Solr', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NGINX', 'Apache'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="glass-card p-8 text-center">
                <div className="w-64 h-64 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-1">
                    <img
                      src="https://plus.unsplash.com/premium_vector-1683141134058-8e07475bc6e4?w=400&h=400&fit=crop&crop=face"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-green rounded-full animate-pulse" />
                </div>

                <h3 className="text-2xl font-bold text-gradient mb-2">Ashish sahoo</h3>
                <p className="text-gray-400">Full-Stack Developer</p>
              </div>
            </div>

            {/* Bio and Info */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-4 text-neon-blue">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full-stack developer with 5+ years of experience building
                  innovative digital solutions. My journey started with a fascination for
                  creating things that make a difference, and I've been crafting code ever since.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in modern web technologies and love exploring the intersection
                  of design and development to create exceptional user experiences.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon-purple">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={tech}
                      className="cyber-border px-4 py-2 rounded-full text-sm font-medium 
                               bg-gradient-to-r from-cyber-glass to-transparent
                               hover:scale-105 transition-transform duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Code, title: 'Clean Code', desc: 'Writing maintainable, efficient code' },
                  { icon: Zap, title: 'Performance', desc: 'Optimized, fast solutions' },
                  { icon: Heart, title: 'User-Centric', desc: 'Focused on user experience' }
                ].map((value, index) => (
                  <div key={value.title} className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300">
                    <value.icon className="mx-auto mb-3 text-neon-teal" size={32} />
                    <h4 className="font-bold mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-400">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
