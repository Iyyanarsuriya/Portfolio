import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">IYYANAR S</h3>
            <p className="text-dark-300 text-sm">
              Front-End Developer passionate about creating beautiful, responsive web applications
              with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-dark-100">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-dark-100">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-3 text-dark-300 hover:text-primary-400 transition-colors duration-300 text-sm group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-3 text-dark-300 hover:text-primary-400 transition-colors duration-300 text-sm group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-center space-x-3 text-dark-300 text-sm">
                <MapPin size={18} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              )}
            </div>

            <p className="text-dark-400 text-sm flex items-center space-x-1">
              <span>© {currentYear} Iyyanar S. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" />
              <span>and React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
