import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: personalInfo.location,
      link: null,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: personalInfo.linkedin,
    },
  ];

  return (
    <section id="contact" className="section-container bg-dark-800/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="mt-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-dark-50 mb-4">Let's Connect!</h3>
              <p className="text-dark-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="card group hover:scale-105 transition-all duration-300"
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <div className="bg-primary-500/10 p-3 rounded-lg group-hover:bg-primary-500/20 transition-colors duration-300">
                        <div className="text-primary-400">{item.icon}</div>
                      </div>
                      <div>
                        <p className="text-dark-400 text-sm">{item.title}</p>
                        <p className="text-dark-100 font-semibold group-hover:text-primary-400 transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-500/10 p-3 rounded-lg">
                        <div className="text-primary-400">{item.icon}</div>
                      </div>
                      <div>
                        <p className="text-dark-400 text-sm">{item.title}</p>
                        <p className="text-dark-100 font-semibold">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

