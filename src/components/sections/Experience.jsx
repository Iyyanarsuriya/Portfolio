import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { workExperience } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div
              key={job.id}
              className="card animate-slide-up hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 pb-6 border-b border-primary-500/20">
                <div className="flex-1">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="bg-primary-500/10 p-3 rounded-lg mt-1">
                      <Briefcase className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-50 mb-2">{job.title}</h3>
                      <p className="text-primary-400 font-semibold text-lg mb-2">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-dark-300 ml-16">
                    <Calendar size={16} />
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold text-dark-100 mb-4">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-dark-200 group"
                    >
                      <ChevronRight
                        size={20}
                        className="text-primary-400 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                      />
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
