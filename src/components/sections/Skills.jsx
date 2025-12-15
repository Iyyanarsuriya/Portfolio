import { Code, Layers, Wrench, Palette, Users } from 'lucide-react';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      items: skills.languages,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="w-6 h-6" />,
      items: skills.frameworks,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6" />,
      items: skills.tools,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-6 h-6" />,
      items: skills.uiux,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      items: skills.softSkills,
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="skills" className="section-container bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card animate-slide-up hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-dark-50">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-200 text-sm font-medium hover:border-primary-500 hover:text-primary-300 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 card text-center animate-slide-up">
          <p className="text-dark-200 text-lg">
            Continuously learning and expanding my skill set to stay current with the latest web development trends and technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
