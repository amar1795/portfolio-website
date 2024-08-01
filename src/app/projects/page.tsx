import Link from "next/link";
import React from "react";

const page = () => {

  return (
    <div className="h-screen    flex ">
      <div className=" mt-12  w-full flex flex-col items-center overflow-auto  ">
        <h1 className="text-[6rem] below-500:mt-7 uppercase  below-1025:text-[4rem] below-635:text-[2rem]">Projects</h1>
        <div className="   w-[80vw] ml-[12rem] below-1100:ml-0 ">
          {/* projects container */}
          {/* https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4 */}
          <div className="projectCard flex below-1445:flex-col  below-1445:items-center  min-h-[20rem] my-4">
            <div className="leftCard 0 below-378:hidden  w-[25rem] flex items-center justify-center below-550:hidden ">
              {" "}
              <iframe
                width="500"
                height="250"
                src="https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div className="leftCard 0  w-[25rem]  items-center justify-center hidden below-550:flex below-378:hidden ">
              {" "}
              <iframe
                width="300"
                height="250"
                src="https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div className="leftCard 0  w-[25rem]  items-center justify-center hidden below-378:flex ">
              {" "}
              <iframe
                width="250"
                height="250"
                src="https://res.cloudinary.com/dfveswqdm/video/upload/v1722445942/Untitled_video_-_Made_with_Clipchamp_2_a9vec4.mp4"
                frameborder="0"
                allowfullscreen
              />
            </div>

            <div className="rightCard  h-full w-full flex flex-col   justify-between pl-5">
              <div className="  flex-1 pt-[1rem] ">
                <h1 className=" text-[2rem] below-566:text-[1.5rem] below-426:text-[1rem]">PurchasesPal Ecommerce</h1>
                <p className=" mt-2  below-426:text-[0.7rem]">5 May - 25 July 2024</p>
                <p className=" mt-2 below-566:text-[0.8rem]">
                  A full Stack E-Commerce App made using the NextJs for both server and client side logic
                  utilizing its server actions for seamless and fast data
                  fethcing . Implemented password reset, email sending using
                  mailgun , deep nested categories for products-improved the
                  performance of the app in fethching all the products per main
                  categories .
                </p>
              </div>
              <div className="  flex justify-between h-[4rem] below-566:h-[8rem]  min-h-4 ">
                <div className=" flex  justify-between items-center below-566:flex-col  py-3 px-2 ">
                  <div className=" flex items-center  h-[3rem] mx-4 ">
                    <Link href="https://www.purchasespal.shop/" target="_blank">
                      {" "}
                      <button className=" glow-button mx-2 my-2">
                        Live Link
                      </button>
                    </Link>
                  </div>

                  <div className=" flex items-center   h-[3rem]">
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
