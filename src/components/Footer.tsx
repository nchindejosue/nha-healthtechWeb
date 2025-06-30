import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('footer.company'),
      links: [
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.team'), path: '/team' },
        { name: t('nav.contact'), path: '/contact' },
      ]
    },
    {
      title: t('footer.solutions'),
      links: [
        { name: 'Mi-Health', path: 'https://mi-healthapp.netlify.app/', external: true },
        { name: 'NHA-Connect', path: '/solutions' },
        { name: 'NHA-Clinic', path: '/solutions' },
      ]
    },
    {
      title: t('footer.resources'),
      links: [
        { name: 'Documentation', path: '#' },
        { name: 'Support', path: '/contact' },
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ets-nhahealthtech/', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/237${number}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/LOGO copy.png" 
                alt="NHA-HEALTHTECH Logo" 
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">
                  <span className="text-white">NHA</span>
                  <span className="text-project-blue">-HEALTHTECH</span>
                </span>
                <span className="text-xs text-gray-400 -mt-1">{t('footer.tagline')}</span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-project-blue" />
                <span>Technipole Building, Polytechnic Yde, Yaoundé, Cameroon</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-project-blue" />
                <a href="mailto:info@nhahealthtech.com" className="hover:text-project-blue transition-colors">
                  info@nhahealthtech.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-project-blue" />
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleWhatsAppClick('678580260')}
                    className="hover:text-project-blue transition-colors flex items-center space-x-1"
                  >
                    <span>678580260</span>
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleWhatsAppClick('674063317')}
                    className="hover:text-project-blue transition-colors flex items-center space-x-1"
                  >
                    <span>674063317</span>
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-project-blue transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-project-blue transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} NHA-HEALTHTECH. {t('footer.copyright')}
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-project-blue hover:bg-gray-700 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;