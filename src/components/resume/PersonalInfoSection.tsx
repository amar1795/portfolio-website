import { Linkedin } from 'lucide-react';
import React from 'react';

interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

interface PersonalInfoSectionProps {
  personalInfo: PersonalInfo;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ personalInfo }) => {
  return (
    <div className="mb-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl below-500:text-[0.8rem] font-bold text-green-400 mb-4 uppercase tracking-wider">
          {personalInfo.name}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="text-green-400 text-xs below-500:text-[0.5rem]">{personalInfo.phone}</span>
          <span className="text-green-400">|</span>
          <a href={`mailto:${personalInfo.email}`} className="text-green-400 hover:text-green-300 text-xs below-500:text-[0.5rem] transition-colors">
            {personalInfo.email}
          </a>
          <span className="text-green-400 ">|</span>
          <a 
            href={`https://${personalInfo.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 text-xs below-500:text-[0.5rem] hover:text-green-300 transition-colors"
          >
            {"Linkedin"}
          </a>
          <span className="text-green-400">|</span>
          <a 
            href={`https://${personalInfo.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 text-xs below-500:text-[0.5rem] hover:text-green-300 transition-colors"
          >
            {"Github"}
          </a>
          <span className="text-green-400">|</span>
          <a 
            href={`https://${personalInfo.portfolio}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 text-xs below-500:text-[0.5rem] hover:text-green-300 transition-colors"
          >
            {"Twitter"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
