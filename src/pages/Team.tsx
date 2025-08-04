import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Briefcase,
  Users
} from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';
import { useTranslation } from '../hooks/useTranslation';

const Team = () => {
  const { t } = useTranslation();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const leadership = [
    {
      name: t('team.members.harmony.name'),
      role: t('team.members.harmony.role'),
      description: t('team.members.harmony.description'),
      education: t('team.members.harmony.education'),
      location: t('team.members.harmony.location'),
      expertise: ['Healthcare Innovation', 'Medical Practice', 'Strategic Leadership', 'Product Vision'],
      image: '/team/harmony.jpg'
    },
    {
      name: t('team.members.josue.name'),
      role: t('team.members.josue.role'),
      description: t('team.members.josue.description'),
      education: t('team.members.josue.education'),
      location: t('team.members.josue.location'),
      expertise: ['Software Architecture', 'Healthcare IT', 'Project Management', 'Technical Leadership'],
      image: '/team/josue.jpg'
    }
  ];

  const developers = [
    {
      name: t('team.members.keziah.name'),
      role: t('team.members.keziah.role'),
      description: t('team.members.keziah.description'),
      expertise: ['Mobile Development', 'React/React Native', 'UI/UX Design', 'Database Management'],
      image: '/team/keziah.jpg'
    },
    {
      name: t('team.members.thierry.name'),
      role: t('team.members.thierry.role'),
      description: t('team.members.thierry.description'),
      expertise: ['Backend Development', 'Cloud Architecture', 'API Design', 'Security Implementation'],
      image: '/team/thierry.jpg'
    },
    {
      name: t('team.members.favour.name'),
      role: t('team.members.favour.role'),
      description: t('team.members.favour.description'),
      expertise: ['Frontend Development', 'JavaScript/TypeScript', 'Responsive Design', 'Performance Optimization'],
      image: '/team/favour.jpg'
    },
    {
      name: t('team.members.ulrich.name'),
      role: t('team.members.ulrich.role'),
      description: t('team.members.ulrich.description'),
      expertise: ['UI/UX Design', 'Software Development', 'Design Systems', 'User Research'],
      image: '/team/ulrich.jpg'
    }
  ];

  const advisors = [
    {
      name: t('team.members.willy.name'),
      role: t('team.members.willy.role'),
      description: t('team.members.willy.description'),
      location: t('team.members.willy.location'),
      expertise: ['Software Architecture', 'Scalable Systems', 'Technical Strategy', 'Mentorship'],
      image: '/team/willy.jpg'
    },
    {
      name: t('team.members.bill.name'),
      role: t('team.members.bill.role'),
      description: t('team.members.bill.description'),
      location: t('team.members.bill.location'),
      expertise: ['Startup Strategy', 'Innovation Management', 'Business Development', 'Ecosystem Building'],
      image: '/team/bill.jpg'
    }
  ];

  const stats = [
    { number: '8', label: t('team.stats.members') },
    { number: '15+', label: t('team.stats.experience') },
    { number: '3', label: t('team.stats.countries') },
    { number: '100%', label: t('team.stats.excellence') }
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
              {t('team.hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-project-blue to-project-blue-light">
                {t('team.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('team.hero.subtitle')}
            </p>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-project-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-project-blue rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              {t('team.leadership.title')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('team.leadership.subtitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('team.leadership.description')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {leadership.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} isLeadership={true} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-project-blue rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              {t('team.developers.title')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('team.developers.subtitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('team.developers.description')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {developers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              {t('team.advisors.title')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('team.advisors.subtitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('team.advisors.description')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {advisors.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-project-blue to-project-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('team.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('team.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-project-blue px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {t('team.cta.positions')}
              </a>
              <a
                href="mailto:info@nhahealthtech.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-project-blue transition-all duration-200"
              >
                {t('team.cta.cv')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;