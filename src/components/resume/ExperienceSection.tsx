import React from 'react';
import { Experience } from '@/data/resumeData';

interface ExperienceSectionProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-green-400 mb-6 uppercase tracking-wider border-b-2 border-green-400 pb-2">
        Experience
      </h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="bg-black/50 border border-green-400/30 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-green-300">{exp.title}</h3>
                <p className="text-green-200 font-medium text-sm">{exp.company}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-green-200 text-sm">{exp.location}</p>
                <p className="text-green-400 font-medium text-sm">{exp.duration}</p>
              </div>
            </div>
            <ul className="space-y-2 mt-3">
              {exp.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} className="text-green-100 flex items-start text-xs">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
