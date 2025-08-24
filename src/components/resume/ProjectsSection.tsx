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
                    <button
                      key={techIndex}
                      className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-sm uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30"
                      style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}
                    >
                      {tech}
                    </button>
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
