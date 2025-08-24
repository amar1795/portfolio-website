'use client';
import React from "react";
import { resumeData } from "@/data/resumeData";
import PersonalInfoSection from "@/components/resume/PersonalInfoSection";
import EducationSection from "@/components/resume/EducationSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import SkillsSection from "@/components/resume/SkillsSection";

const page = async () => {
  const downloadUrl = `https://drive.google.com/uc?export=download&id=1yqqygQLgWccZ_Pj4NAiqQ1avceuxeVBA`;
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Amarjeet_Singh_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="h-screen overflow-auto flex">
      <div className="mt-12 w-full flex flex-col items-center below-650:mt-[8rem] below-500:mt-[6rem] below-378:mt-[8rem] ">
        <div className="w-[90vw] max-w-6xl ml-[12rem] below-1100:ml-0 flex justify-center">
          <h1 className="text-[6rem] uppercase below-650:text-[4rem] below-500:text-[2rem] below-378:text-[1.1rem] text-green-100 italic">Resume</h1>
        </div>

        <div className="sectionBorder w-[90vw] max-w-6xl ml-[12rem] below-500:mt-[2rem] below-1100:ml-0 px-6 py-8">
          <PersonalInfoSection personalInfo={resumeData.personalInfo} />
          <EducationSection education={resumeData.education} />
          <ExperienceSection experience={resumeData.experience} />
          <ProjectsSection projects={resumeData.projects} />
          {resumeData.skills && <SkillsSection skills={resumeData.skills} />}
        </div>
        
        <div className="mt-8 mb-32 pb-20 w-[90vw] max-w-6xl ml-[12rem] below-1100:ml-0 flex justify-center">
          <button 
            onClick={handleDownload}
            className="border-2 border-green-400/80 text-green-300 px-6 py-3 text-sm uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-3 below-378:py-2"
            style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
