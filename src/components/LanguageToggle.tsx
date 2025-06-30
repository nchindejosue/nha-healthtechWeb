import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageToggle = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700 uppercase">
          {language}
        </span>
      </motion.button>
    </div>
  );
};

export default LanguageToggle;