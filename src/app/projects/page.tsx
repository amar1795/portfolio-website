import ProjectCard from "@/components/projectCard";
import Link from "next/link";
import React from "react";
import { resumeData } from "@/data/resumeData";
const page = () => {

  return (
    <div className="h-screen    flex  ">
      <div className=" mt-12 below-500:mt-[5rem]   w-full  flex flex-col items-center overflow-auto  ">
        <h1 className="text-[6rem] below-500:mt-7 uppercase  below-1025:text-[4rem] below-635:text-[2rem] below-500:text-[1.5rem] text-green-100 italic">Projects</h1>
        <div className="   w-[80vw]   below-1100:ml-0  below-500:w-[85vw]   ml-[14rem]">
          {/* projects container */}
          {/* https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4 */}
          
          <ProjectCard
            title={resumeData.projects[0].name}
            date={resumeData.projects[0].duration}
            description={resumeData.projects[0].description}
            videoSrc={resumeData.projects[0].videoSrc}
            liveLink={resumeData.projects[0].link}
            sourceLink={resumeData.projects[0].sourceCode}
            detailsLink="/projects/1"
          />
           <ProjectCard
            title={resumeData.projects[1].name}
            date={resumeData.projects[1].duration}
            description={resumeData.projects[1].description}
            videoSrc={resumeData.projects[1].videoSrc}
            liveLink={resumeData.projects[1].link}
            sourceLink={resumeData.projects[1].sourceCode}
            detailsLink="/projects/2"
          />
           <ProjectCard
            title={resumeData.projects[2].name}
            date={resumeData.projects[2].duration}
            description={resumeData.projects[2].description}
            videoSrc={resumeData.projects[2].videoSrc}
            
            sourceLink={resumeData.projects[2].sourceCode}
            detailsLink="/projects/3"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
