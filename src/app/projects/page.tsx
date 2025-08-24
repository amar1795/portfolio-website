import Link from "next/link";
import React from "react";

const page = () => {

  return (
    <div className="h-screen    flex ">
      <div className=" mt-12 below-500:mt-[5rem]  w-full flex flex-col items-center overflow-auto  ">
        <h1 className="text-[6rem] below-500:mt-7 uppercase  below-1025:text-[4rem] below-635:text-[2rem] below-500:text-[1.2rem] text-green-100 italic">Projects</h1>
        <div className="   w-[80vw] ml-[12rem] below-1100:ml-0 ">
          {/* projects container */}
          {/* https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4 */}
          <div className="projectCard flex below-1445:flex-col  below-1445:items-center  min-h-[20rem] my-4">
            <div className="leftCard 0 below-500:hidden  w-[25rem] flex items-center justify-center below-550:hidden ">
              {" "}
              <video
                width="500"
                height="250"
                autoPlay
                loop
                muted
                playsInline
                className="rounded"
              >
                <source src="https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="leftCard 0  w-[25rem]  items-center justify-center hidden below-550:flex below-500:hidden ">
              {" "}
              <video
                width="300"
                height="250"
                autoPlay
                loop
                muted
                playsInline
                className="rounded"
              >
                <source src="https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="leftCard 0  w-[25rem]  items-center justify-center hidden below-500:flex ">
              {" "}
              <video
                width="250"
                height="250"
                autoPlay
                loop
                muted
                playsInline
                className="rounded"
              >
                <source src="https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="rightCard  h-full w-full flex flex-col   justify-between pl-5  below-500:pl-0 below-500:mx-0">
              <div className="  flex-1 pt-[1rem] ">
                <h1 className=" text-[2rem] below-566:text-[1.5rem] below-426:text-[1rem] below-500:text-[0.8rem] uppercase text-green-300 italic">PurchasesPal Ecommerce</h1>
                <p className=" mt-2  below-426:text-[0.7rem] below-500:mt-[2rem] uppercase below-500:text-[0.5rem] text-green-100">5 May - 25 July 2024</p>
                <p className=" mt-2 below-566:text-[0.8rem] below-500:mt-[2rem] uppercase below-500:text-[0.4rem]  text-left text-green-100">
                  A full Stack E-Commerce App made using the NextJs for both server and client side logic
                  utilizing its server actions for seamless and fast data
                  fethcing . Implemented password reset, email sending using
                  mailgun , deep nested categories for products-improved the
                  performance of the app in fethching all the products per main
                  categories .
                </p>
              </div>
              <div className="   below-500:hidden   flex justify-between h-[4rem] below-566:h-[8rem]  min-h-4   below-500:mx-0  below-500:px-0">
                <div className=" flex  below-500:ml-0  justify-between below-566:flex-col  py-3 px-2  below-500:px-0  ">
                  <div className=" flex items-center  h-[3rem] mx-4  below-500:mx-0 below-500:my-0  ">
                    <Link href="https://optimzed-e-commerce-git-main-amar1795s-projects.vercel.app/" target="_blank">
                      {" "}
                      <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2 below-500:px-1 below-500:mx-0 below-500:w-[6rem] below-500:text-[0.3rem]"
                        style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                      >
                        Live Link
                      </button>
                    </Link>
                  </div>

                  <div className=" flex items-center   h-[3rem] below-500:mt-0 ">
                    <Link href="https://github.com/amar1795/PROJECTS-" target="_blank">
                      {" "}
                      <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2 below-500:px-1 below-500:mx-0 below-500:w-[8rem] below-500:text-[0.3rem]"
                        style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                      >
                        Source Code
                      </button>
                    </Link>
                  </div>
                </div>
                <div className=" flex items-center  h-[4rem]">
                  <Link href="/projects/1">
                    {" "}
                    <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2 below-500:px-1 below-500:mx-0 below-500:w-[12rem] below-500:text-[0.2rem] below-500:mt-4"
                      style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                    >
                      View Project Details
                    </button>
                  </Link>
                </div>
              </div>

              <div className="  hidden  below-500:flex justify-between h-[4rem] below-500:h-[12rem]  min-h-4   below-500:mx-0  below-500:px-0">
                <div className=" flex  below-500:ml-0   justify-between  below-566:flex-col  py-3 px-2  below-500:px-0  ">
                  <div className=" flex items-center  mx-4  below-500:mx-0 below-500:my-0  ">
                    <Link href="https://www.purchasespal.shop/" target="_blank">
                      {" "}
                      <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2 below-500:px-1 below-500:mx-0 below-500:w-[6rem] below-500:text-[0.3rem]"
                        style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                      >
                        Live Link
                      </button>
                    </Link>
                  </div>

                  <div className=" flex items-center    below-500:mt-0 ">
                    <Link href="https://github.com/amar1795/PROJECTS-" target="_blank">
                      {" "}
                      <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2 below-500:px-1 below-500:mx-0 below-500:w-[8rem] below-500:text-[0.3rem]"
                        style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                      >
                        Source Code
                      </button>
                    </Link>
                  </div>
                  <div className=" flex items-center  mb-6  ">
                  <Link href="/projects/1">
                    {" "}
                    <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2 below-500:px-1 below-500:mx-0 below-500:w-[12rem] below-500:text-[0.3rem] below-500:mt-4"
                      style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                    >
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
    </div>
  );
};

export default page;
