import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Accenture, India',
      period: 'Feb 2024 – Present',
      description:
        'Working on AI-integrated healthcare and pharmaceutical platforms using Java, Spring Boot, AEM, and REST APIs.',
      skills: ['Java', 'Spring Boot', 'AEM', 'REST APIs', 'AI Integration'],
    },
    {
      type: 'project',
      title: 'UnitedHealth Group OPTUM',
      company: 'Accenture',
      period: 'Mar 2024 – Nov 2024',
      description:
        'Developed enterprise applications using AEM, integrated REST APIs, collaborated on AI dashboards, and delivered production support for healthcare systems.',
      skills: ['AEM', 'REST APIs', 'Java', 'TensorFlow', 'Agile'],
    },
    {
      type: 'project',
      title: 'GlaxoSmithKline (GSK PLC)',
      company: 'Accenture',
      period: 'Dec 2024 – Present',
      description:
        'Developing patient engagement platforms, integrating AI backend systems, building automation scripts, and enhancing app performance.',
      skills: ['Spring Boot', 'Python', 'AI APIs', 'Automation', 'AEM'],
    },
  ];

  const education = [
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      period: '2015 - 2019',
      description:
        'Graduated Magna Cum Laude. Specialized in Software Engineering and Web Development. Active member of the Computer Science Society.',
      skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'],
    },
    {
      type: 'education',
      title: 'Full-Stack Web Development Bootcamp',
      company: 'CodeAcademy Pro',
      period: '2018',
      description:
        'Intensive 12-week program covering modern web technologies. Built 10+ projects including full-stack applications.',
      skills: ['MERN Stack', 'Git', 'Agile', 'Test-Driven Development'],
    },
  ];

  const recognitions = [
    {
      type: 'recognition',
      title: 'Bright Beginners Award',
      company: 'Accenture',
      period: 'FY’24 Q3',
      description:
        'Awarded for outstanding contribution and rapid upskilling during early project phases in healthcare AI initiatives.',
      skills: ['Recognition', 'Team Impact'],
    },
  ];

  const TimelineItem = ({ item, index, isLast }: { item: any; index: number; isLast: boolean }) => (
    <div className="relative animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-neon-blue to-neon-purple" />
      )}

      <div className="flex items-start gap-6">
        {/* Timeline dot */}
        <div
          className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
            item.type === 'education'
              ? 'bg-gradient-to-br from-neon-purple to-neon-pink'
              : item.type === 'recognition'
              ? 'bg-gradient-to-br from-neon-orange to-neon-yellow'
              : 'bg-gradient-to-br from-neon-blue to-neon-teal'
          } neon-glow`}
        >
          {item.type === 'education' ? (
            <GraduationCap size={24} />
          ) : item.type === 'recognition' ? (
            <Award size={24} />
          ) : (
            <Briefcase size={24} />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 glass-card p-6 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="text-xl font-bold text-gradient">{item.title}</h3>
            <div className="flex items-center gap-2 text-neon-teal text-sm">
              <Calendar size={16} />
              {item.period}
            </div>
          </div>

          <h4 className="text-lg font-semibold text-neon-blue mb-3">{item.company}</h4>
          <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill: string) => (
              <span
                key={skill}
                className="px-3 py-1 bg-cyber-glass border border-cyber-glass-border rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Experience & Education</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-neon-blue flex items-center gap-3">
                <Briefcase size={28} />
                Work Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    isLast={index === experiences.length - 1}
                  />
                ))}
              </div>

              {/* Recognition */}
              <h3 className="text-2xl font-bold mt-16 mb-8 text-neon-orange flex items-center gap-3">
                <Award size={28} />
                Recognitions
              </h3>
              <div className="space-y-8">
                {recognitions.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    isLast={index === recognitions.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-neon-purple flex items-center gap-3">
                <GraduationCap size={28} />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    isLast={index === education.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
