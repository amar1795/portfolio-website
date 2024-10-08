import React from "react";

import {
  getProfile,
  getRecentPlayingTrack,
  getToken,
  RefreshToken,
} from "@/actions/songs";
import { login } from "@/actions/spotifyAuth";
import PdfViewer from "@/components/PdfViewer";

const page = async () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1icBiIv1Eoo4dNo8QDiEb8U-EoXfHeMaY/view?usp=sharing"; // Replace with the path to your PDF
  const FileID = "1QiJQz5WBx5DnjzSJ2QA1Ra_k1fmj9hKr";
  const MainpdfUrl = `https://drive.google.com/file/d/${FileID}/preview`;
  const downloadUrl = `https://drive.google.com/file/d/1QiJQz5WBx5DnjzSJ2QA1Ra_k1fmj9hKr/view?usp=sharing`;
  return (
    <div className=" h-screen   overflow-auto   flex    ">
      <div className=" mt-12  w-full flex flex-col items-center below-650:mt-[8rem] below-500:mt-[6rem] below-378:mt-[8rem]  ">
        <h1 className="text-[6rem] uppercase below-650:text-[4rem] below-500:text-[2rem] below-378:text-[1.1rem]   ">Resume</h1>

        <div className=" sectionBorder w-[80vw] ml-[12rem] below-500:mt-[2rem] below-1100:ml-0  px-4   ">
          <PdfViewer pdfUrl={MainpdfUrl} />
            {/* <div className=" h-[10rem]">

            </div> */}
        </div>
        <div className=" h-[20rem]">
        <div className=" mt-6 h-[10rem]">
            <a href={downloadUrl} download="resume.pdf">
              <button className="glow-button uppercase below-378:text-[0.4rem]">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
