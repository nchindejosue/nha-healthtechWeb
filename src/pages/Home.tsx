import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Smartphone, 
  Users, 
  Heart, 
  Globe, 
  Award,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Home = () => {
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

  const features = [
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'End-to-end encryption ensures your health data remains completely secure and private.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Access your health records anytime, anywhere with our intuitive mobile application.'
    },
    {
      icon: Users,
      title: 'Family Management',
      description: 'Manage health records for your entire family from a single, convenient account.'
    },
    {
      icon: Heart,
      title: 'AI-Powered Insights',
      description: 'Get personalized health insights and recommendations powered by advanced AI.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Early Access Users' },
    { number: '5+', label: 'Healthcare Partners' },
    { number: '99.9%', label: 'Data Security' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mbeki',
      role: 'General Practitioner',
      content: 'NHA-HEALTHTECH is revolutionizing how we manage patient records in Africa. The platform is intuitive and secure.',
      rating: 5
    },
    {
      name: 'Jean-Paul Nguema',
      role: 'Patient',
      content: 'Finally, I can access all my medical history in one place. Mi-Health has made managing my diabetes so much easier.',
      rating: 5
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-project-blue/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-project-blue rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-project-blue-light rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-project-blue-dark rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-project-blue rounded-full text-sm font-medium mb-6"
              >
                <Award className="w-4 h-4 mr-2" />
                4th Place - AIM STARTUP & ACCELERATE AFRICA 2024
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t('home.hero.title').split(' ').slice(0, 1).join(' ')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-project-blue to-project-blue-light">
                  {t('home.hero.title').split(' ').slice(1, 3).join(' ')}
                </span>
                {t('home.hero.title').split(' ').slice(3).join(' ')}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                {t('home.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://mi-healthapp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-project-blue to-project-blue-light text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  {t('home.hero.cta1')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/about"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-project-blue hover:text-project-blue transition-all duration-200 flex items-center justify-center"
                >
                  {t('home.hero.cta2')}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healthcare Technology"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Secure Health Records</p>
                      <p className="text-sm text-gray-600">Always accessible, always protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
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

      {/* Features Section */}
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
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
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

      {/* Solutions Preview */}
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
              Our Integrated Solution Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From personal health records to telehealth and practice management, 
              we provide comprehensive digital health solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-project-blue/10 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-project-blue rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mi-Health</h3>
              <p className="text-gray-600 mb-6">
                Your personal health passport. Secure, portable, and always accessible 
                digital health records for you and your family.
              </p>
              <a
                href="https://mi-healthapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-project-blue font-medium hover:text-project-blue-dark"
              >
                {t('common.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NHA-Connect</h3>
              <p className="text-gray-600 mb-6">
                Bridge geographical barriers with our secure telehealth platform 
                designed for low-bandwidth environments.
              </p>
              <Link
                to="/solutions"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                {t('common.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NHA-Clinic</h3>
              <p className="text-gray-600 mb-6">
                Streamline your practice with our lightweight, cloud-based EHR 
                and practice management solution.
              </p>
              <Link
                to="/solutions"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                {t('common.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What People Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Hear from healthcare providers and patients who are already experiencing the future of healthcare.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-project-blue to-project-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of users who are already taking control of their health 
              with our innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mi-healthapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-project-blue px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Get Started with Mi-Health
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-project-blue transition-all duration-200 flex items-center justify-center"
              >
                {t('common.contactUs')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;