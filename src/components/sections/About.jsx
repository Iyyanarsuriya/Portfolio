import { Code2, Rocket, Users, Award, GraduationCap, CheckCircle2, Globe } from 'lucide-react';
import { summary, education, certificates, languages } from '../../data/portfolioData';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: '3+ Years',
      description: 'Professional Experience',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Full-Stack Stack',
      description: 'React, Node.js, Python, FastAPI',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Agile & DevOps',
      description: 'CI/CD & Collaborative Teams',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Code',
      description: 'Scalable & AI-Powered Solutions',
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

        {/* Education, Certifications & Languages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education */}
          <div className="card animate-slide-up flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-500/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-primary-400">Education</h3>
              </div>
              <h4 className="text-lg font-semibold text-dark-100 mb-1">{education.degree}</h4>
              <p className="text-dark-300 text-sm mb-3">{education.institution}</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-dark-700 text-dark-300 text-sm">
              <span>{education.period}</span>
              <span className="font-semibold text-primary-400 bg-primary-500/10 px-2.5 py-1 rounded">CGPA: {education.cgpa}</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="card animate-slide-up flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-500/10 p-3 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400">Certifications</h3>
              </div>
              {certificates.map((cert) => (
                <div key={cert.id} className="space-y-2">
                  <h4 className="text-lg font-semibold text-dark-100">{cert.title}</h4>
                  <p className="text-dark-300 text-sm leading-relaxed line-clamp-4">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card animate-slide-up flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-400">Languages</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-dark-700/60 rounded-lg border border-dark-600">
                    <span className="font-semibold text-dark-100">{lang.name}</span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded bg-primary-500/10 text-primary-300 border border-primary-500/20">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

