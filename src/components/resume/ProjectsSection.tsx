import React from 'react';
import { Project } from '@/data/resumeData';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl below-500:text-sm font-bold text-green-400 mb-6 uppercase tracking-wider border-b-2 border-green-400 pb-2">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-black/50 border border-green-400/30 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-300 mb-2 below-500:text-[0.6rem]">{project.name}</h3>
            <p className="text-green-100 mb-3 text-xs leading-loose below-500:text-[0.4rem]">{project.description}</p>
            
            {project.technologies && (
              <div className="mb-3">
                <p className="text-green-400 mb-2 font-bold text-sm below-500:text-[0.6rem]">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <button
                      key={techIndex}
                      className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-500:text-[0.4rem]"
                      style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className=' flex gap-6'> 
             {project.sourceCode && (
              <div className="flex flex-wrap gap-2 mt-3">
                {project.sourceCode.split(' | ').map((link, linkIndex) => {
                  const isGithub = link.includes('github.com');
                  const isSourceCode = isGithub || linkIndex === 0;
                  const buttonText = isSourceCode && 'Source Code';
                  
                  return (
                    <a
                      key={linkIndex}
                      href={link.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 inline-block no-underline below-500:text-[0.4rem]"
                      style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                    >
                      {buttonText}
                    </a>
                  );
                })}
              </div>
            )}

            {project.link && (
              <div className="flex flex-wrap gap-2 mt-3">
                {project.link.split(' | ').map((link, linkIndex) => {
                  const isGithub = link.includes('github.com');
                  // console.log("this is the link", link);
                  const isSourceCode = isGithub || linkIndex === 0;
                  const buttonText = isGithub ? 'Source Code' : 'Live Link';
                  
                  return (
                    <a
                      key={linkIndex}
                      href={link.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 inline-block no-underline below-500:text-[0.4rem]"
                      style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                    >
                      {buttonText}
                    </a>
                  );
                })}
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
