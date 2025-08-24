import React from 'react';
import { Education } from '@/data/resumeData';

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-green-400 mb-6 uppercase tracking-wider border-b-2 border-green-400 pb-2">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-black/50 border border-green-400/30 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-green-300">{edu.institution}</h3>
                <p className="text-green-200 italic text-sm">{edu.degree}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-green-200 text-sm">{edu.location}</p>
                <p className="text-green-400 font-medium text-sm">{edu.duration}</p>
              </div>
            </div>
            {edu.details && (
              <p className="text-green-100 mt-2 text-sm">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
