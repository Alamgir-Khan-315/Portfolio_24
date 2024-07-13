import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TiThMenu } from "react-icons/ti";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const [mobile_menu , setMobile_menu] = useState(false);

  return (
    <div>

      {/* Navbar */}
      <div id='home' className="navbar flex justify-between p-4 items-center">

        <div className="logo text-2xl md:text-3xl">Portfolio</div>

        {/* large screen navbar */}
        <div className="list md:flex md:pt-3">
          <ul className='hidden       md:flex  md:flex-row gap-7 cursor-pointer'>
            <AnchorLink offset={50} href='#home'> <li><p onClick={() => setMenu("home")}>Home</p> {menu==="home"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600' />:<></>} </li></AnchorLink>
            <AnchorLink href='#about'> <li><p onClick={() => setMenu("about")}>About me</p> {menu==="about"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600'/>:<></>} </li></AnchorLink>
            <AnchorLink offset={50} href='#service'> <li><p onClick={() => setMenu("service")}>Service</p> {menu==="service"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600'/>:<></>} </li></AnchorLink>
            <AnchorLink offset={50} href='#work'> <li><p onClick={() => setMenu("work")}>Project</p> {menu==="work"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600'/>:<></>} </li></AnchorLink>
            <AnchorLink offset={50} href='#contact'> <li><p onClick={() => setMenu("contact")}>Contact me</p> {menu==="contact"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600'/>:<></>} </li></AnchorLink>
          </ul>
        </div>

        {/* mobile navbar */}
        {
          mobile_menu ? <div className="list text-center h-full md:hidden md:pt-3">
          <ul className='w-1/2 right-0 top-0 pt-[50px] fixed h-full px-3 bg-neutral-950 flex flex-col gap-7 cursor-pointer'>
            <AnchorLink offset={50} href='#home'> <li><p onClick={() => setMenu("home")}>Home</p> {menu==="home"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600' />:<></>} </li></AnchorLink>
            <AnchorLink href='#about'> <li><p onClick={() => setMenu("about")}>About me</p> {menu==="about"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600'/>:<></>} </li></AnchorLink>
            <AnchorLink offset={50} href='#service'> <li><p onClick={() => setMenu("service")}>Service</p> {menu==="service"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600'/>:<></>} </li></AnchorLink>
            <AnchorLink offset={50} href='#work'> <li><p onClick={() => setMenu("work")}>Project</p> {menu==="work"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600'/>:<></>} </li></AnchorLink>
            <AnchorLink offset={50} href='#contact'> <li><p onClick={() => setMenu("contact")}>Contact me</p> {menu==="contact"?<MdOutlineHorizontalRule className='w-full size-6 text-orange-600'/>:<></>} </li></AnchorLink>
          </ul>
        </div> :<></>
        }

        <div className="right flex gap-5">
        <AnchorLink offset={50} href='#contact'><div className="button mr-[10px] md:-mr-[10px] p-1 px-3 py-2 rounded-[50px] bg-gradient-to-r from-pink-700 to-90% to-orange-400 cursor-pointer 
            md:px-4 hover:scale-105 transition-all">Contact With Me</div></AnchorLink>
          {/* icon small screen */}
          <div onClick={() => setMobile_menu(!mobile_menu)} className="cursor-pointer icon right-3 top-6 text-xl fixed md:hidden flex items-center"><TiThMenu /></div>

          {/* Go up */}
          <AnchorLink href='#home'>
          <div className='Go_UP md:flex hover:scale-105 transition-all fixed p-1 px-3 py-2 rounded-[50px] bottom-[10px] right-[10px] md:right-[20px] text-2xl bg-gradient-to-r from-pink-700 to-90% to-orange-400'><FaArrowCircleUp /></div>
          </AnchorLink>
          
        </div>
      </div>

    </div>
  )
}

export default Navbar


