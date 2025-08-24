import React from 'react';
import { Project } from '@/data/resumeData';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-green-400 mb-6 uppercase tracking-wider border-b-2 border-green-400 pb-2">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-black/50 border border-green-400/30 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-green-300 mb-2">{project.name}</h3>
            <p className="text-green-100 mb-3">{project.description}</p>
            
            {project.technologies && (
              <div className="mb-3">
                <p className="text-green-400 font-medium mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-400/20 text-green-300 px-2 py-1 rounded text-sm border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline transition-colors"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
