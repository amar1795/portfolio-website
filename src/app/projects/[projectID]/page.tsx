import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { projectID: string } }) => {
  return (
    <div className=" h-screen   overflow-auto   flex    ">
      <div className=" mt-12  w-full flex flex-col items-center  below-500:mt-[5rem] ">
        <h1 className="text-[6rem] uppercase below-1025:text-[4rem] below-635:text-[2rem]  below-500:mt-7 below-500:text-[1.1rem] text-green-100 italic">Projects</h1>
        <div className=" sectionBorder w-[80vw] ml-[12rem] below-635:mt-7 below-1100:ml-0  px-4   pl-7   below-500:px-2">
          <div className=" text-center uppercase mt-7">
            <h1 className=" text-[2rem] below-635:text-[1.5rem] below-426:text-[1.2rem]  below-500:text-[0.7rem] text-green-100 italic"> PurchasesPal Ecommerce</h1>
          </div>

          <h1 className=" my-4 below-500:text-center">
            {" "}
            <p className=" mt-2 below-426:text-[0.8rem] uppercase below-500:text-[0.4rem] text-green-100 italic">5 May - 25 July 2024</p>
          </h1>
          <div className="  min-h-[5rem]  ">
            <h1 className=" my-4 below-426:text-[0.8rem] uppercase below-500:text-[0.5rem] text-green-100 italic"> Tech Stacks used :</h1>
            <div>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > nextjs</button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > TypeScript</button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > MongoDB</button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > Prisma ORM</button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > Cloudinary</button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > NextAuth</button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > Lucide React</button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > Recharts </button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > Stripe</button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > Mailgun </button>
              <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
              > Zod </button>
            </div>
          </div>

          <div className=" mt-4">
            <div className=" flex mt-4">
              <h1 className=" my-4 below-426:text-[0.8rem] uppercase below-500:text-[0.4rem] text-green-100 italic"> Live Link:</h1>
              <Link href="https://optimzed-e-commerce-git-main-amar1795s-projects.vercel.app/" target="_blank">
                <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                  style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                > Live Link</button>
              </Link>
            </div>
            <div className=" flex  mt-4">
              <h1 className=" my-4 below-426:text-[0.8rem] uppercase below-500:text-[0.4rem] text-green-100 italic"> Source Code:</h1>
              <Link
                href="https://github.com/amar1795/PROJECTS-"
                target="_blank"
              >
                <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                  style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                > Source Link</button>
              </Link>
            </div>
          </div>
          <div className="     mt-5  mb-7 ">
            <h1 className=" text-[1.2rem]  mb-7 below-635:text-[1rem] below-426:text-[0.8rem] uppercase below-500:text-[0.5rem] text-green-100 italic"> Description :</h1>
              <p className=" mt-4 text-sm uppercase below-500:text-xs text-green-100 italic">
              {" "}
              -A full Stack E-Commerce App made using the NextJs and utilizing
              its server actions for seamless and fast data fethcing .
              </p>
              <p className=" mt-4 text-sm uppercase below-500:text-xs text-green-100 italic">
              -Implemented password reset, email sending using mailgun , deep
              nested categories for products-improved the performance of the app
              in fethching all the products per main categories .
              </p>
              <p className=" mt-4 text-sm uppercase below-500:text-xs text-green-100 italic">
              -using next js
              server side logic to maintain and improve the SEO performance for
              both website and mobile devices 
              </p>
              <p className=" mt-4 text-sm uppercase below-500:text-xs text-green-100 italic">
              -implemented features like search
              ,filtering ,pagination ,adding comments,like and disliking
              comments ,2step verification ,password reset ,wishlisting ,email
              notification for order confirmation , 2 step verification and much
              more
              </p>
              <p className=" mt-4 text-sm uppercase below-500:text-xs text-green-100 italic">
              -used best practices like function and data caching on server
              to improve performance and o auth login for safely logging ,
              typescript for type safety-UI is all self coded and no library
              used almost all the components are pure CSS and js 
              </p>
              <p className=" mt-4 text-sm uppercase below-500:text-xs text-green-100 italic">
              -stripe payment
              Gateway added along with the built in Wallet to make the payment
              process more seamless and user friendly

            </p>
          </div>
        </div>
        
        <div className="mt-8 mb-32 pb-20 w-[80vw] max-w-6xl ml-[12rem] below-1100:ml-0"></div>
      </div>
    </div>
  );
};

export default page;
