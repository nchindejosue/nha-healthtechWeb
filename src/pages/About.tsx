import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Shield, 
  Lightbulb,
  Award,
  Globe,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
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

  const values = [
    {
      icon: Heart,
      title: t('about.values.patientCentric.title'),
      description: t('about.values.patientCentric.description')
    },
    {
      icon: Shield,
      title: t('about.values.security.title'),
      description: t('about.values.security.description')
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: t('about.milestones.founded.title'),
      description: t('about.milestones.founded.description')
    },
    {
      year: '2024',
      title: t('about.milestones.recognition.title'),
      description: t('about.milestones.recognition.description')
    },
    {
      year: '2024',
      title: t('about.milestones.mvp.title'),
      description: t('about.milestones.mvp.description')
    },
    {
      year: '2024',
      title: t('about.milestones.partnerships.title'),
      description: t('about.milestones.partnerships.description')
    }
  ];

  const problems = [
    {
      title: t('about.problems.fragmented.title'),
      description: t('about.problems.fragmented.description'),
      impact: t('about.problems.fragmented.impact')
    },
    {
      title: t('about.problems.continuity.title'),
      description: t('about.problems.continuity.description'),
      impact: t('about.problems.continuity.impact')
    },
    {
      title: t('about.problems.empowerment.title'),
      description: t('about.problems.empowerment.description'),
      impact: t('about.problems.empowerment.impact')
    },
    {
      title: t('about.problems.geographical.title'),
      description: t('about.problems.geographical.description'),
      impact: t('about.problems.geographical.impact')
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
              {t('about.hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-project-blue to-project-blue-light">
                NHA-HEALTHTECH
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare Innovation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h2>
              <p className="text-gray-600 mb-6">
                {t('about.story.paragraph1')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('about.story.paragraph2')}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-project-blue" />
                  <span className="text-sm font-medium text-gray-700">{t('about.story.award')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-project-blue" />
                  <span className="text-sm font-medium text-gray-700">{t('about.story.focus')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-project-blue/10 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-project-blue rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission.title')}</h3>
              <p className="text-gray-600">
                {t('about.mission.description')}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-project-blue-dark rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision.title')}</h3>
              <p className="text-gray-600">
                {t('about.vision.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-project-blue to-project-blue-light rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problems We Address */}
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
              {t('about.problems.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.problems.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <div className="flex items-center space-x-2 text-project-blue">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{problem.impact}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Milestones */}
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
              {t('about.milestones.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.milestones.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-project-blue/20 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  className="relative flex items-start space-x-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-project-blue to-project-blue-light rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-project-blue px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {t('common.contactUs')}
              </a>
              <a
                href="/team"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-project-blue transition-all duration-200"
              >
                {t('about.cta.meetTeam')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;