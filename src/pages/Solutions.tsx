import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Users, 
  Shield, 
  Zap, 
  Heart,
  ArrowRight,
  CheckCircle,
  Cloud,
  Lock,
  Wifi,
  Database
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Solutions = () => {
  const { t } = useTranslation();
  
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

  const solutions = [
    {
      id: 'mi-health',
      icon: Smartphone,
      title: t('solutions.products.miHealth.title'),
      subtitle: t('solutions.products.miHealth.subtitle'),
      description: t('solutions.products.miHealth.description'),
      features: t('solutions.products.miHealth.features'),
      color: 'from-project-blue to-project-blue-light',
      bgColor: 'from-blue-50 to-project-blue/10',
      link: 'https://mi-healthapp.netlify.app/'
    },
    {
      id: 'nha-connect',
      icon: Globe,
      title: t('solutions.products.nhaConnect.title'),
      subtitle: t('solutions.products.nhaConnect.subtitle'),
      description: t('solutions.products.nhaConnect.description'),
      features: t('solutions.products.nhaConnect.features'),
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      link: '/solutions'
    },
    {
      id: 'nha-clinic',
      icon: Users,
      title: t('solutions.products.nhaClinic.title'),
      subtitle: t('solutions.products.nhaClinic.subtitle'),
      description: t('solutions.products.nhaClinic.description'),
      features: t('solutions.products.nhaClinic.features'),
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      link: '/solutions'
    }
  ];

  const techFeatures = [
    {
      icon: Shield,
      title: t('solutions.technology.security.title'),
      description: t('solutions.technology.security.description')
    },
    {
      icon: Cloud,
      title: t('solutions.technology.cloud.title'),
      description: t('solutions.technology.cloud.description')
    },
    {
      icon: Zap,
      title: t('solutions.technology.ai.title'),
      description: t('solutions.technology.ai.description')
    },
    {
      icon: Wifi,
      title: t('solutions.technology.bandwidth.title'),
      description: t('solutions.technology.bandwidth.description')
    },
    {
      icon: Database,
      title: t('solutions.technology.interoperable.title'),
      description: t('solutions.technology.interoperable.description')
    },
    {
      icon: Lock,
      title: t('solutions.technology.privacy.title'),
      description: t('solutions.technology.privacy.description')
    }
  ];

  const benefits = [
    {
      title: t('solutions.benefits.patients.title'),
      items: t('solutions.benefits.patients.items')
    },
    {
      title: t('solutions.benefits.providers.title'),
      items: t('solutions.benefits.providers.items')
    },
    {
      title: t('solutions.benefits.systems.title'),
      items: t('solutions.benefits.systems.items')
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
              {t('solutions.hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-project-blue to-project-blue-light">
                {t('solutions.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('solutions.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`bg-gradient-to-br ${solution.bgColor} p-8 rounded-2xl`}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{solution.subtitle}</p>
                    <p className="text-gray-700 mb-8">{solution.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {solution.id === 'mi-health' ? (
                      <a
                        href={solution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                      >
                        {t('common.learnMore')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        to={solution.link}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                      >
                        {t('common.learnMore')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={`/solutions/${solution.id}.jpg`}
                    alt={solution.title}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Features */}
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
              {t('solutions.technology.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.technology.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {techFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-project-blue to-project-blue-light rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('solutions.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.benefits.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-project-blue flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
              {t('solutions.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('solutions.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mi-healthapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-project-blue px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                {t('solutions.cta.tryMiHealth')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-project-blue transition-all duration-200 flex items-center justify-center"
              >
                {t('solutions.cta.contactSales')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Solutions;