
import { useState } from 'react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = {
    Frontend: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 85 },
      { name: 'JavaScript ES6+', level: 95 }
    ],
    Backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 87 },
      { name: 'PostgreSQL', level: 83 }
    ],
    Tools: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'VS Code', level: 98 },
      { name: 'Figma', level: 75 },
      { name: 'Postman', level: 90 }
    ],
    DevOps: [
      { name: 'AWS', level: 78 },
      { name: 'Vercel', level: 90 },
      { name: 'Netlify', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Linux', level: 82 }
    ]
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                    : 'glass-card hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-neon-blue font-bold">{skill.level}%</span>
                </div>
                
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
