import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Linkedin, MapPin, GraduationCap } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  education?: string;
  location?: string;
  expertise: string[];
}

interface TeamMemberCardProps {
  member: TeamMember;
  isLeadership?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isLeadership = false }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <div className="w-full h-64 bg-gradient-to-br from-project-blue to-project-blue-light flex items-center justify-center">
          <User className="w-24 h-24 text-white/80" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-project-blue font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 mb-4">{member.description}</p>
        
        {member.education && (
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>{member.education}</span>
          </div>
        )}
        
        {member.location && (
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{member.location}</span>
          </div>
        )}
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-project-blue text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-project-blue transition-colors duration-200">
            <Mail className="w-4 h-4" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-project-blue transition-colors duration-200">
            <Linkedin className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;