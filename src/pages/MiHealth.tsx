import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Shield, 
  Users, 
  Brain,
  QrCode,
  Camera,
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Download,
  Play
} from 'lucide-react';

const MiHealth = () => {
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
      title: 'Secure Digital Records',
      description: 'Store your complete medical history, surgeries, allergies, medications, and lab results with military-grade encryption.'
    },
    {
      icon: Camera,
      title: 'Document Upload & OCR',
      description: 'Use your phone camera to scan and store physical prescriptions, lab reports, and imaging results with intelligent text recognition.'
    },
    {
      icon: Users,
      title: 'Guardian Access',
      description: 'Manage the health records of children and elderly dependents from a single account with appropriate permissions.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get AI-generated health summaries, medication reminders, adherence tracking, and personalized health insights.'
    },
    {
      icon: QrCode,
      title: 'Secure Sharing',
      description: 'Share a clean, read-only health summary with any doctor via QR code or directly on your screen.'
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Track vital signs, symptoms, and health metrics over time with intelligent trend analysis.'
    }
  ];

  const targetGroups = [
    {
      title: 'Mothers & Children',
      description: 'Track immunizations, growth milestones, and family health history',
      icon: '👶',
      benefits: ['Vaccination tracking', 'Growth monitoring', 'Pediatric records']
    },
    {
      title: 'Elderly Individuals',
      description: 'Manage multiple medications and chronic conditions effectively',
      icon: '👴',
      benefits: ['Medication management', 'Chronic disease tracking', 'Emergency contacts']
    },
    {
      title: 'Chronically Ill Patients',
      description: 'Comprehensive disease management and care coordination',
      icon: '🏥',
      benefits: ['Treatment history', 'Specialist coordination', 'Progress tracking']
    },
    {
      title: 'Youth & Adolescents',
      description: 'Build healthy habits and maintain complete health records',
      icon: '🧑',
      benefits: ['Health education', 'Preventive care', 'Sports medicine']
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Mother of 3',
      content: 'Mi-Health has made managing my family\'s health records so much easier. I love having everything in one secure place.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Emmanuel Kone',
      role: 'Family Physician',
      content: 'My patients who use Mi-Health come to appointments better prepared. It\'s revolutionizing patient care.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Joseph Mbarga',
      role: 'Diabetes Patient',
      content: 'The AI insights help me manage my diabetes better. I can track my progress and share data with my doctor easily.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const dataFields = [
    'Personal Demographics',
    'Medical History',
    'Surgical History',
    'Allergies & Reactions',
    'Current Medications',
    'Laboratory Results',
    'Imaging Reports',
    'Vaccination Records',
    'Family Medical History',
    'Emergency Contacts'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-project-blue rounded-full text-sm font-medium mb-6">
                <Smartphone className="w-4 h-4 mr-2" />
                Your Personal Health Passport
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Meet
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-project-blue to-project-blue-light">
                  Mi-Health
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                A secure, patient-controlled Personal Health Record (PHR) mobile application 
                that serves as your lifelong, portable health passport. Take control of your 
                health data and improve your care experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://mi-healthapp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-project-blue to-project-blue-light text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Join Waitlist
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-project-blue hover:text-project-blue transition-all duration-200 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>500+ Early Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-project-blue" />
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>5.0 Rating</span>
                </div>
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
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mi-Health App"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Sync</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Powerful Features for Complete Health Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mi-Health combines cutting-edge technology with intuitive design to give you 
              unprecedented control over your health information.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
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

      {/* Target Groups */}
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
              Designed for Every Stage of Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mi-Health adapts to your unique health needs, whether you're managing family health, 
              chronic conditions, or simply staying on top of preventive care.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {targetGroups.map((group, index) => (
              <motion.div
                key={group.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{group.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{group.title}</h3>
                <p className="text-gray-600 mb-6">{group.description}</p>
                <ul className="space-y-2">
                  {group.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-project-blue flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Fields */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Health Data Management
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Mi-Health captures and organizes all aspects of your health information, 
                creating a complete picture that helps you and your healthcare providers 
                make better decisions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dataFields.map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-project-blue flex-shrink-0" />
                    <span className="text-gray-700">{field}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Health Data Management"
                className="rounded-2xl shadow-2xl"
              />
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
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from patients and healthcare providers using Mi-Health.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
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
              Take Control of Your Health Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our early access program and be among the first to experience the future 
              of personal health management in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mi-healthapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-project-blue px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Download className="mr-2 w-5 h-5" />
                Join Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-project-blue transition-all duration-200 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              * Mi-Health is currently in development. Join our waitlist to be notified when it's available.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default MiHealth;