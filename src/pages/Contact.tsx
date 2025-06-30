import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  Clock,
  Globe,
  CheckCircle
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/237${number}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      details: 'info@nhahealthtech.com',
      description: t('contact.info.email.description')
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      details: '678580260, 674063317',
      description: t('contact.info.phone.description')
    },
    {
      icon: MapPin,
      title: t('contact.info.address.title'),
      details: 'Technipole Building, Polytechnic Yde, Yaoundé, Cameroon',
      description: t('contact.info.address.description')
    }
  ];

  const officeHours = [
    { day: t('contact.hours.weekdays'), hours: '8:00 AM - 6:00 PM WAT' },
    { day: t('contact.hours.saturday'), hours: '9:00 AM - 2:00 PM WAT' },
    { day: t('contact.hours.sunday'), hours: t('contact.hours.closed') }
  ];

  const faqs = [
    {
      question: t('contact.faq.availability.question'),
      answer: t('contact.faq.availability.answer')
    },
    {
      question: t('contact.faq.security.question'),
      answer: t('contact.faq.security.answer')
    },
    {
      question: t('contact.faq.integration.question'),
      answer: t('contact.faq.integration.answer')
    },
    {
      question: t('contact.faq.languages.question'),
      answer: t('contact.faq.languages.answer')
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-project-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('contact.hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-project-blue to-project-blue-light">
                {t('contact.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contact.form.title')}</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{t('contact.form.success.title')}</h3>
                  <p className="text-green-600">{t('contact.form.success.message')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-project-blue focus:border-transparent transition-colors duration-200"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-project-blue focus:border-transparent transition-colors duration-200"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-project-blue focus:border-transparent transition-colors duration-200"
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-project-blue focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">{t('contact.form.subjectPlaceholder')}</option>
                      <option value="general">{t('contact.form.subjects.general')}</option>
                      <option value="partnership">{t('contact.form.subjects.partnership')}</option>
                      <option value="support">{t('contact.form.subjects.support')}</option>
                      <option value="demo">{t('contact.form.subjects.demo')}</option>
                      <option value="press">{t('contact.form.subjects.press')}</option>
                      <option value="careers">{t('contact.form.subjects.careers')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-project-blue focus:border-transparent transition-colors duration-200"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-project-blue to-project-blue-light text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    {t('contact.form.submit')}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contact.info.title')}</h2>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-project-blue to-project-blue-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.title === t('contact.info.phone.title') ? (
                        <div className="space-y-1">
                          <button 
                            onClick={() => handleWhatsAppClick('678580260')}
                            className="text-project-blue font-medium hover:text-project-blue-dark flex items-center space-x-1"
                          >
                            <span>678580260</span>
                            <MessageCircle className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleWhatsAppClick('674063317')}
                            className="text-project-blue font-medium hover:text-project-blue-dark flex items-center space-x-1"
                          >
                            <span>674063317</span>
                            <MessageCircle className="w-4 h-4" />
                          </button>
                        </div>
                      ) : info.title === t('contact.info.email.title') ? (
                        <a href={`mailto:${info.details}`} className="text-project-blue font-medium hover:text-project-blue-dark">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-project-blue font-medium">{info.details}</p>
                      )}
                      <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 p-6 rounded-2xl mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-project-blue" />
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.hours.title')}</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-blue-50 to-project-blue/10 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('contact.quickActions.title')}</h3>
                <div className="space-y-3">
                  <a
                    href="https://mi-healthapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-project-blue hover:text-project-blue-dark transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t('contact.quickActions.joinWaitlist')}</span>
                  </a>
                  <a
                    href="/solutions"
                    className="flex items-center space-x-3 text-project-blue hover:text-project-blue-dark transition-colors duration-200"
                  >
                    <Globe className="w-5 h-5" />
                    <span>{t('contact.quickActions.exploreSolutions')}</span>
                  </a>
                  <a
                    href="mailto:info@nhahealthtech.com"
                    className="flex items-center space-x-3 text-project-blue hover:text-project-blue-dark transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{t('contact.quickActions.partnerships')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.faq.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.faq.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-project-blue to-project-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('contact.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('contact.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@nhahealthtech.com"
                className="bg-white text-project-blue px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {t('contact.cta.partnerships')}
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-project-blue transition-all duration-200"
              >
                {t('contact.cta.learnMore')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;