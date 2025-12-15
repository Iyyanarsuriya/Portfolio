import { ArrowDown, Download, Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="animate-slide-down">
            <p className="text-primary-400 text-lg md:text-xl font-semibold mb-2">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-50 mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold gradient-text mb-6">
              {personalInfo.title}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-dark-300 text-lg md:text-xl max-w-3xl animate-slide-up">
            Crafting beautiful, responsive web experiences with{' '}
            <span className="text-primary-400 font-semibold">React</span>,{' '}
            <span className="text-primary-400 font-semibold">Angular</span>, and modern web technologies.
            Passionate about creating intuitive user interfaces and delivering exceptional digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-scale-in">
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-slide-up">
            {['React', 'Angular', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Redux'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-800 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={32} className="text-primary-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
