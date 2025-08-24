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
        <h1 className="text-4xl font-bold text-green-400 mb-4 uppercase tracking-wider">
          {personalInfo.name}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-green-200 text-sm">
          <span>{personalInfo.phone}</span>
          <span>|</span>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-green-400 transition-colors">
            {personalInfo.email}
          </a>
          <span>|</span>
          <a 
            href={`https://${personalInfo.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            {personalInfo.linkedin}
          </a>
          <span>|</span>
          <a 
            href={`https://${personalInfo.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            {personalInfo.github}
          </a>
          <span>|</span>
          <a 
            href={`https://${personalInfo.portfolio}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            {personalInfo.portfolio}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
