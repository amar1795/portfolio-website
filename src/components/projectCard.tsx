import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  videoSrc: string | undefined;
  liveLink?: string;
  sourceLink: string;
  detailsLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  description,
  videoSrc,
  liveLink,
  sourceLink,
  detailsLink,
}) => {
  return (
    <div className="projectCard flex below-1445:flex-col below-1445:items-center min-h-[20rem] my-4 mb-10 ">
      {/* Video Section */}
      <div className="leftCard below-500:hidden w-[25rem] flex items-center justify-center below-550:hidden">
        <video width="500" height="250" autoPlay loop muted playsInline className="rounded">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="leftCard w-[25rem] items-center justify-center hidden below-550:flex below-500:hidden">
        <video width="300" height="250" autoPlay loop muted playsInline className="rounded">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="leftCard w-[25rem] items-center justify-center hidden below-500:flex">
        <video width="250" height="250" autoPlay loop muted playsInline className="rounded">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Section */}
      <div className="rightCard h-full w-full flex flex-col justify-between pl-5 below-500:pl-0 below-500:mx-0">
        <div className="flex-1 pt-[1rem]">
          <h1 className="text-[2rem] below-566:text-[1.5rem] below-426:text-[1rem] below-500:text-[0.8rem] uppercase text-green-300 italic">
            {title}
          </h1>
          <p className="mt-2 below-426:text-[0.7rem] below-500:mt-[2rem] uppercase below-500:text-[0.5rem] text-green-100">
            {date}
          </p>
          <p className="mt-2 below-566:text-[0.8rem] text-center below-500:mt-[2rem] uppercase below-500:text-[0.4rem]  text-green-100">
            {description}
          </p>
        </div>

        {/* Desktop Buttons */}
        <div className="below-500:hidden flex justify-between h-[4rem] below-566:h-[8rem] min-h-4">
          <div className="flex justify-between py-3 px-2">
            <div className="flex items-center h-[3rem] mx-4">
              {liveLink && (
              <Link href={liveLink} target="_blank">
                <button
                  className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30"
                  style={{ boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)", textDecoration: "none" }}
                >
                  Live Link
                </button>
              </Link>
            )}
          </div>

            <div className="flex items-center h-[3rem]">
              <Link href={sourceLink} target="_blank">
                <button
                  className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30"
                  style={{ boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)", textDecoration: "none" }}
                >
                  Source Code
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center h-[4rem]">
            <Link href={detailsLink}>
              <button
                className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30"
                style={{ boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)", textDecoration: "none" }}
              >
                View Project Details
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Buttons */}
  <div className="hidden below-500:flex min-h-[8rem] h-full w-full">
          <div className="py-3 px-2 flex flex-col items-center justify-center h-full w-full">
            <div className=" mx-4  my-1">
              {liveLink && (
              <Link href={liveLink} target="_blank">
                <button
                  className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg  hover:shadow-green-400/50 shadow-md shadow-green-400/30  below-500:text-[0.4rem] "
                  style={{ boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)", textDecoration: "none" }}
                >
                  Live Link
                </button>
              </Link>
              )}
            </div>

            <div className="my-1">
              <Link href={sourceLink} target="_blank">
                <button
                  className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-500:text-[0.4rem]"
                  style={{ boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)", textDecoration: "none" }}
                >
                  Source Code
                </button>
              </Link>
            </div>

            <div className="my-1">
              <Link href={detailsLink}>
                <button
                  className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-500:text-[0.4rem]"
                  style={{ boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)", textDecoration: "none" }}
                >
                  View Project Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
