import Link from "next/link";
import React from "react";

const page = () => {
  const ProjectData = {
    projectName: "PurchasesPal Ecommerce",
    projectCompletedDate: "Project Completion date",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere quia eligendi sapiente, quae expedita omnis reprehenderit distinctio tempora accusamus non voluptatibus! Iure et quidem voluptatibus facilis, libero pariatur veritatis?",
  };

  return (
    <div className="h-screen    flex ">
      <div className="terminals mt-12  w-full flex flex-col items-center overflow-auto  ">
        <h1 className="text-[6rem] uppercase ">Projects</h1>
        <div className="  h-screen w-[80vw] ml-[12rem] ">
          {/* projects container */}
          {/* https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4 */}
          <div className="projectCard flex  h-[10rem] min-h-[20rem] my-4">
            <div className="leftCard 0 h-full w-[25rem] flex items-center justify-center ">
              {" "}
              <iframe
                width="500"
                height="250"
                src="https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div className="rightCard  h-full w-full flex flex-col   justify-between pl-5">
              <div className="  flex-1 pt-[1rem] ">
                <h1 className=" text-[2rem]">PurchasesPal Ecommerce</h1>
                <p className=" mt-2">5 May - 25 July 2024</p>
                <p className=" mt-2">
                  A full Stack E-Commerce App made using the NextJs for both server and client side logic
                  utilizing its server actions for seamless and fast data
                  fethcing . Implemented password reset, email sending using
                  mailgun , deep nested categories for products-improved the
                  performance of the app in fethching all the products per main
                  categories .
                </p>
              </div>
              <div className="  flex justify-between h-[4rem]  min-h-4">
                <div className=" flex  justify-between items-center  py-3 px-2 ">
                  <div className=" flex items-center  h-[3rem] mx-4 ">
                    <Link href="https://www.purchasespal.shop/" target="_blank">
                      {" "}
                      <button className=" glow-button mx-2 my-2">
                        Live Link
                      </button>
                    </Link>
                  </div>

                  <div className=" flex items-center  h-[3rem]">
                    <Link href="https://github.com/amar1795/PROJECTS-" target="_blank">
                      {" "}
                      <button className=" glow-button mx-2 my-2">
                        Source Code
                      </button>
                    </Link>
                  </div>
                </div>
                <div className=" flex items-center  h-[4rem]">
                  <Link href="/projects/1">
                    {" "}
                    <button className=" glow-button mx-2 my-2">
                      View Project Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
