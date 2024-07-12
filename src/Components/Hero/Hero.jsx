import React, { useState } from 'react'
import pic from '../../assets/Hero_Profile_Pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Ak_cv from '../../assets/cv.png'
import { IoCloudDownloadSharp } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
import Resume from '../../assets/ALAMGIR KHAN.pdf'

const Hero = () => {

 const [ cv, setCv ] = useState(false);

  return (
    <div className='hero py-12 md:py-[60px]'>
      <div className="body flex flex-col justify-center text-center">
        <div className="pic mt-[30px]">
          <img className='mx-auto' src={pic} alt=""/></div>
        
        <h1 className='mt-10 px-10 font-bold text-3xl md:text-[50px]'><span className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-90% to-orange-400       
        md:text-[50px]'>I'm Alamgir Khan,</span> frontend developer</h1>
        <p className='mt-6 px-5  md:w-4/5 md:mx-auto md:text-xl'>
          I am frontend developer and vector art desginer from karachi with 2 year of experience in multiple projects like LMS, E-commerence web and ERP module </p>

        <div className="button flex justify-center gap-9 mt-10">
        <AnchorLink offset={50} href='#contact'><div className="connect bg-gradient-to-r from-pink-700 to-90% to-orange-400 p-2 px-3 rounded-[50px] hover:border-2">Contact With Me</div></AnchorLink>
        
        {/* CV */}
        {
          cv ? <div className='absolute w-[300px] top-[100%] md:w-[450px] md:top-[30%] bg-neutral-950'>
            <div onClick={() => setCv(false)} className='cursor-pointer font-bold text-red-600 text-3xl rounded-lg float-end'><IoCloseCircleSharp /></div>
            <div className="download float-left text-2xl pt-1 ml-3"><a href={Resume}><IoCloudDownloadSharp /></a></div>
            <img className='w-[100%]' src={Ak_cv} alt="CV" />
            </div> :<></>
        }
        <div onClick={() => setCv(true)} className="cursor-pointer resume p-2 px-3 border-2 rounded-[50px] hover:border-orange-500">My Resume</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
