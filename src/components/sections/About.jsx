import { Code2, Rocket, Users, Award } from 'lucide-react';
import { summary, education } from '../../data/portfolioData';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: '2.4+ Years',
      description: 'Professional Experience',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Modern Stack',
      description: 'React, Angular, Node.js',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Agile Teams',
      description: 'Collaborative Development',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Code',
      description: 'Clean & Maintainable',
    },
  ];

  return (
    <section id="about" className="section-container bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        {/* Summary */}
        <div className="card mb-12 animate-slide-up">
          <h3 className="text-2xl font-bold text-primary-400 mb-4">Professional Summary</h3>
          <p className="text-dark-200 leading-relaxed text-lg">{summary}</p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card text-center group hover:scale-105 transition-transform duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-dark-50 mb-2">{item.title}</h4>
              <p className="text-dark-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="card animate-slide-up">
          <div className="flex items-start space-x-4">
            <div className="bg-primary-500/10 p-4 rounded-lg">
              <Award className="w-8 h-8 text-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary-400 mb-2">Education</h3>
              <h4 className="text-xl font-semibold text-dark-100 mb-2">{education.degree}</h4>
              <p className="text-dark-300 mb-1">{education.institution}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-dark-400">
                <span>{education.period}</span>
                <span className="hidden sm:inline">•</span>
                <span className="font-semibold text-primary-400">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
