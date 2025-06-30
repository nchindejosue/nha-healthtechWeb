import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Briefcase,
  Users
} from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';

const Team = () => {
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

  const leadership = [
    {
      name: 'NJUKANG Harmony A.',
      role: 'CEO & Co-Founder',
      description: 'Sixth-Year Medical Student and HealthTech Innovator with a passion for transforming African healthcare through technology.',
      education: 'Medical Student',
      location: 'Yaoundé, Cameroon',
      expertise: ['Healthcare Innovation', 'Medical Practice', 'Strategic Leadership', 'Product Vision']
    },
    {
      name: 'NCHINDE TANDJONG Josue',
      role: 'CTO & Co-Founder',
      description: 'Software/Computer Engineer and Mi-HEALTH Project Manager with extensive experience in healthcare technology solutions.',
      education: 'Computer Engineering',
      location: 'Yaoundé, Cameroon',
      expertise: ['Software Architecture', 'Healthcare IT', 'Project Management', 'Technical Leadership']
    }
  ];

  const developers = [
    {
      name: 'CHING Keziah',
      role: 'Software Engineer',
      description: 'Full-stack developer specializing in mobile and web applications with a focus on user experience.',
      expertise: ['Mobile Development', 'React/React Native', 'UI/UX Design', 'Database Management']
    },
    {
      name: 'Thierry MESUMBE',
      role: 'Software Engineer',
      description: 'Backend specialist with expertise in cloud infrastructure and API development for healthcare systems.',
      expertise: ['Backend Development', 'Cloud Architecture', 'API Design', 'Security Implementation']
    },
    {
      name: 'FONTEM Favour',
      role: 'Software Engineer',
      description: 'Frontend developer passionate about creating intuitive interfaces for healthcare applications.',
      expertise: ['Frontend Development', 'JavaScript/TypeScript', 'Responsive Design', 'Performance Optimization']
    },
    {
      name: 'EMAMBOU Ulrich',
      role: 'UI/UX Designer & Software Engineer',
      description: 'Unique blend of design and engineering skills, ensuring our products are both beautiful and functional.',
      expertise: ['UI/UX Design', 'Software Development', 'Design Systems', 'User Research']
    }
  ];

  const advisors = [
    {
      name: 'NJUNDONG Willy',
      role: 'Senior Technical Advisor',
      description: 'Senior Software Engineer based in Maryland, USA, providing strategic technical guidance and mentorship.',
      location: 'Maryland, USA',
      expertise: ['Software Architecture', 'Scalable Systems', 'Technical Strategy', 'Mentorship']
    },
    {
      name: 'Bill AGHA',
      role: 'Strategic Consultant',
      description: 'Founder & President of Tech Innovation Center (TIC) Foundation, bringing extensive startup and innovation experience.',
      location: 'Cameroon',
      expertise: ['Startup Strategy', 'Innovation Management', 'Business Development', 'Ecosystem Building']
    }
  ];

  const stats = [
    { number: '8', label: 'Team Members' },
    { number: '15+', label: 'Years Combined Experience' },
    { number: '3', label: 'Countries Represented' },
    { number: '100%', label: 'Committed to Excellence' }
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
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-project-blue to-project-blue-light">
                Amazing Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our team is our greatest asset, combining deep medical insights with strong, 
              multi-disciplinary technical expertise to transform healthcare in Africa.
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
              Leadership Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visionary Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our founders bring together medical expertise and technical innovation 
              to drive our mission of transforming African healthcare.
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
              Development Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our skilled developers and designers work tirelessly to build innovative, 
              secure, and user-friendly healthcare solutions.
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
              Advisory Board
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Advisors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced mentors and advisors who guide our strategic direction 
              and provide invaluable industry insights.
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
              Want to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're always looking for passionate individuals who share our vision 
              of transforming healthcare in Africa. Join us in making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-project-blue px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                View Open Positions
              </a>
              <a
                href="mailto:info@nhahealthtech.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-project-blue transition-all duration-200"
              >
                Send Your CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;