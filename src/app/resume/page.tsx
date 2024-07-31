import React from 'react'
 
import { getProfile, getRecentPlayingTrack, getToken, RefreshToken } from '@/actions/songs'
import { login } from '@/actions/spotifyAuth';



const page = async() => {

  return (
    <div className=" h-screen   overflow-auto   flex    ">
    <div className=" mt-12  w-full flex flex-col items-center  ">
    <h1 className="text-[6rem] uppercase ">Resume</h1>
    <div className=" sectionBorder w-[80vw] h-full ml-[12rem]  px-4   ">
      
      


        
       
     
    </div>
  </div>
</div>
  )
}

export default page
