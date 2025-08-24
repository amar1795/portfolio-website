import React from "react";
import { resumeData } from "@/data/resumeData";
import PersonalInfoSection from "@/components/resume/PersonalInfoSection";
import EducationSection from "@/components/resume/EducationSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import SkillsSection from "@/components/resume/SkillsSection";

const page = async () => {
  const downloadUrl = `https://drive.google.com/file/d/1yqqygQLgWccZ_Pj4NAiqQ1avceuxeVBA/view?usp=drive_link`;
  
  return (
    <div className="h-screen overflow-auto flex">
      <div className="mt-12 w-full flex flex-col items-center below-650:mt-[8rem] below-500:mt-[6rem] below-378:mt-[8rem] pb-20">
        <h1 className="text-[6rem] uppercase below-650:text-[4rem] below-500:text-[2rem] below-378:text-[1.1rem]">Resume</h1>

        <div className="sectionBorder w-[90vw] max-w-6xl ml-[12rem] below-500:mt-[2rem] below-1100:ml-0 px-6 py-8">
          <PersonalInfoSection personalInfo={resumeData.personalInfo} />
          <EducationSection education={resumeData.education} />
          <ExperienceSection experience={resumeData.experience} />
          <ProjectsSection projects={resumeData.projects} />
          {resumeData.skills && <SkillsSection skills={resumeData.skills} />}
        </div>
        
        <div className="mt-8 mb-20">
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <button className="glow-button uppercase below-378:text-[0.4rem]">Download Resume PDF</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
