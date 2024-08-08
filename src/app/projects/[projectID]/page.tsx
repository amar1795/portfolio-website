import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { projectID: string } }) => {
  return (
    <div className=" h-screen   overflow-auto   flex    ">
      <div className=" mt-12  w-full flex flex-col items-center  below-500:mt-[5rem] ">
        <h1 className="text-[6rem] uppercase below-1025:text-[4rem] below-635:text-[2rem]  below-500:mt-7 below-500:text-[1.1rem] ">Projects</h1>
        <div className=" sectionBorder w-[80vw] ml-[12rem] below-635:mt-7 below-1100:ml-0  px-4   pl-7   below-500:px-2">
          <div className=" text-center uppercase mt-7">
            <h1 className=" text-[2rem] below-635:text-[1.5rem] below-426:text-[1.2rem]  below-500:text-[0.7rem]  "> PurchasesPal Ecommerce</h1>
          </div>

          <h1 className=" my-4 below-500:text-center">
            {" "}
            <p className=" mt-2 below-426:text-[0.8rem] uppercase below-500:text-[0.4rem]">5 May - 25 July 2024</p>
          </h1>
          <div className="  min-h-[5rem]  ">
            <h1 className=" my-4 below-426:text-[0.8rem] uppercase below-500:text-[0.5rem]"> Tech Stacks used :</h1>
            <div>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> nextjs</button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> TypeScript</button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> MongoDB</button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> Prisma ORM</button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> Cloudinary</button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> NextAuth</button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> Lucide React</button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> Recharts </button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> Stripe</button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> Mailgun </button>
              <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> Zod </button>
            </div>
          </div>

          <div className=" mt-4">
            <div className=" flex mt-4">
              <h1 className=" my-4 below-426:text-[0.8rem] uppercase below-500:text-[0.4rem]"> Live Link:</h1>
              <Link href="https://www.purchasespal.shop/" target="_blank">
                <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2"> Live Link</button>
              </Link>
            </div>
            <div className=" flex  mt-4">
              <h1 className=" my-4 below-426:text-[0.8rem] uppercase below-500:text-[0.4rem]"> Source Code:</h1>
              <Link
                href="https://github.com/amar1795/PROJECTS-"
                target="_blank"
              >
                <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:w-[8rem] below-500:mx-1 below-500:px-2"> Source Link</button>
              </Link>
            </div>
          </div>
          <div className="     mt-5  mb-7 ">
            <h1 className=" text-[1.2rem]  mb-7 below-635:text-[1rem] below-426:text-[0.8rem] uppercase below-500:text-[0.5rem]"> Description :</h1>
              <p className=" mt-4 below-635:text-[0.8rem] uppercase below-500:text-[0.4rem]">
              {" "}
              -A full Stack E-Commerce App made using the NextJs and utilizing
              its server actions for seamless and fast data fethcing .
              </p>
              <p className=" mt-4 below-635:text-[0.8rem] uppercase below-500:text-[0.4rem]">
              -Implemented password reset, email sending using mailgun , deep
              nested categories for products-improved the performance of the app
              in fethching all the products per main categories .
              </p>
              <p className=" mt-4 below-635:text-[0.8rem] uppercase below-500:text-[0.4rem]">
              -using next js
              server side logic to maintain and improve the SEO performance for
              both website and mobile devices 
              </p>
              <p className=" mt-4 below-635:text-[0.8rem] uppercase below-500:text-[0.4rem]">
              -implemented features like search
              ,filtering ,pagination ,adding comments,like and disliking
              comments ,2step verification ,password reset ,wishlisting ,email
              notification for order confirmation , 2 step verification and much
              more
              </p>
              <p className=" mt-4 below-635:text-[0.8rem] uppercase below-500:text-[0.4rem]">
              -used best practices like function and data caching on server
              to improve performance and o auth login for safely logging ,
              typescript for type safety-UI is all self coded and no library
              used almost all the components are pure CSS and js 
              </p>
              <p className=" mt-4 below-635:text-[0.8rem] uppercase below-500:text-[0.4rem]">
              -stripe payment
              Gateway added along with the built in Wallet to make the payment
              process more seamless and user friendly

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
