import { FolderGit2, ChevronRight, Code2 } from 'lucide-react';
import { projects } from '../../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card group hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-primary-500/10 p-3 rounded-lg group-hover:bg-primary-500/20 transition-colors duration-300">
                  <FolderGit2 className="w-8 h-8 text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dark-50 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed">{project.description}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Code2 size={18} className="text-primary-400" />
                  <span className="text-sm font-semibold text-dark-200">Technologies:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-700 border border-primary-500/30 rounded-full text-primary-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="border-t border-dark-700 pt-4">
                <h4 className="text-sm font-semibold text-dark-200 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2 text-dark-300 text-sm group/item"
                    >
                      <ChevronRight
                        size={16}
                        className="text-primary-400 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300"
                      />
                      <span>{highlight}</span>
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

export default Projects;
