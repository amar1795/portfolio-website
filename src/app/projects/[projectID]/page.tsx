import Link from "next/link";
import React from "react";
import { resumeData } from "@/data/resumeData";
import { notFound } from "next/navigation";


const page = ({ params }: { params: { projectID: string } }) => {
  // Convert projectID to number and get the project (array is 0-indexed, but URLs are 1-indexed)
  const projectIndex = parseInt(params.projectID) - 1;

  // Check if the project exists
  if (
    projectIndex < 0 ||
    projectIndex >= resumeData.projects.length ||
    isNaN(projectIndex)
  ) {
    notFound(); // This will show a 404 page
  }

  const currentProject = resumeData.projects[projectIndex];

  return (
    <div className=" h-screen   overflow-auto   flex    ">
      <div className=" mt-12  w-full flex flex-col items-center  below-500:mt-[5rem] ">
        <h1 className="text-[6rem] uppercase below-1025:text-[4rem] below-635:text-[2rem]  below-500:mt-7 below-500:text-[1.1rem] text-green-100 italic">
          Projects
        </h1>

        {/* Back Button */}
        <div className="w-[80vw] ml-[12rem] below-1100:ml-0 mt-4 below-500:mt-2 pb-6">
          <Link href="/projects">
            <button
              className="border-2 border-green-400/80 text-green-300 px-4 py-1 text-sm uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-500:text-xs below-500:px-3 below-500:py-1"
              style={{
                boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                textDecoration: "none",
              }}
            >
              ← Back
            </button>
          </Link>
        </div>

        <div className=" sectionBorder w-[80vw] ml-[12rem] below-635:mt-7 below-1100:ml-0  px-4   pl-7   below-500:px-2">
          <div className=" text-center uppercase mt-7">
            <h1 className=" text-[2rem] below-635:text-[1.5rem] below-426:text-[1.2rem]  below-500:text-[0.7rem] text-green-100 italic">
              {currentProject.name}
            </h1>
          </div>

          <h1 className=" my-4 below-500:text-center">
            <p className=" mt-2 below-426:text-[0.8rem] uppercase below-500:text-[0.4rem] text-green-100 italic">
              {currentProject.duration}
            </p>
          </h1>

          {/* Technologies Section - only show if technologies exist */}
          {currentProject.technologies &&
            currentProject.technologies.length > 0 && (
              <div className="  min-h-[5rem]  ">
                <h1 className=" my-4 below-426:text-[0.8rem] uppercase below-500:text-[0.5rem] text-green-100 italic">
                  {" "}
                  Tech Stacks used :
                </h1>
                <div>
                  {currentProject.technologies.map((tech, index) => (
                    <button
                      key={index}
                      className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                      style={{
                        boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                        textDecoration: "none",
                      }}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            )}

          {/* Links Section */}
          <div className=" mt-4">
            {/* Live Link - only show if link exists */}
            {currentProject.link && (
              <div className=" flex mt-4">
                <h1 className=" my-4 below-426:text-[0.8rem] uppercase below-500:text-[0.4rem] text-green-100 italic">
                  {" "}
                  Live Link:
                </h1>
                <Link href={currentProject.link} target="_blank">
                  <button
                    className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 mt-3"
                    style={{
                      boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                      textDecoration: "none",
                    }}
                  >
                    Live Link
                  </button>
                </Link>
              </div>
            )}

            {/* Source Code Link - only show if sourceLink exists */}
            {(currentProject as any).sourceCode && (
              <div className=" flex  mt-4">
                <h1 className=" my-4 below-426:text-[0.8rem] uppercase below-500:text-[0.4rem] text-green-100 italic">
                  {" "}
                  Source Code:
                </h1>
                <Link href={(currentProject as any).sourceCode} target="_blank">
                  <button
                    className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 mt-3"
                    style={{
                      boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                      textDecoration: "none",
                    }}
                  >
                    Source Code
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Description Section */}
          <div className="     mt-5  mb-7 ">
            <h1 className=" text-[1.2rem]  mb-7 below-635:text-[1rem] below-426:text-[0.8rem] uppercase below-500:text-[0.5rem] text-green-100 italic">
              {" "}
              Description :
            </h1>
            {/* Split description by lines/paragraphs and render each as separate paragraph */}
            {currentProject.detailedDescription.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 text-xs uppercase below-500:text-xs text-green-100 italic flex items-start gap-2  "
              >
                <span className="inline-block transform  scale-50">→</span>
                <span>{paragraph.trim()}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 mb-32 pb-20 w-[80vw] max-w-6xl ml-[12rem] below-1100:ml-0"></div>
      </div>
    </div>
  );
};

export default page;
