import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="    flex">
      <div className="terminals mt-12  w-full flex flex-col items-center">
        <h1 className="text-[6rem] uppercase ">Contact Me</h1>
        <div className=" sectionBorder w-[80vw] h-full ml-[12rem]  px-4   ">
          <div className=" mt-8 px-6">
            <h1> You can Contact me on this Email :</h1>
          </div>
          <div className=" mt-8 px-6">
            <h1>alternatively ! you can also reach out to me on my socials</h1>
            <div className=" mt-4 flex items-center">
              <div className=" flex items-center  h-[3rem] mx-4 ">
                <Link href="https://www.linkedin.com/in/amarjeet-singh-298329242/"  target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2">Linkedin</button>
                </Link>
              </div>
            </div>
            <div className=" mt-4 flex items-center">
              <div className=" flex items-center  h-[3rem] mx-4 ">
                <Link href="https://x.com/jeetamar496" target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2">Twitter</button>
                </Link>
              </div>
            </div>
          </div>

          <div className=" mt-8 px-6 mb-7">
            <h1> You can Find all my projects and work on my github :</h1>
            <div className=" mt-4 flex items-center">
              <div className=" flex items-center  h-[3rem] mx-4 ">
                <Link href="https://github.com/amar1795"  target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2">Github</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
