import React from 'react'
import pic from '../../assets/about_me.jpg'

const About_me = () => {
    return (
        <div id='about' className='About_me py-10 flex flex-col justify-center text-center '>
            <div className="About_body flex flex-col justify-between mt-[40px]">
                <h1 className='font-bold text-3xl mb-[20px]         md:mb-[60px] md:text-5xl'>About Me</h1>

                {/* main */}
                <div className='Inter pt-[40px] container flex flex-row mx-auto gap-15'>
                    <div className="img w-[550px] hidden md:flex">
                        <img className='rounded-lg' src={pic} alt="" />
                    </div>
                    <div className="text px-10 text-justify   md:text-xl">
                        <p className=''>I am an experienced Frontend Developerwith over a decode of professional expertise in field. Throughout my career, i have had privilege of collaborating organization, contributing to there success and growth.</p>
                        <p className='mt-10 md:mt-15'>My position for Frontend developer isnot only reflected in my extensive experience but also in the dedication i bring to each project.</p>

                        {/* skill bar */}
                        <div className="skill_bar mt-[30px] *:md:mt-[50px]">
                            
                            <div className="parent flex flex-row gap-[30px]">
                                <div className="skill_name min-w-[150px] md:max-w-[200px]">
                                    <h1>HTML</h1>
                                    <h1>CSS</h1>
                                    <h1>React JS</h1>
                                    <h1>Tailwind CSS</h1>
                                    <h1>Illustration</h1>
                                </div>
                                <div className="bar w-full ">
                                <hr className='border-0 hover:scale-105 transition-all mt-2 md:mt-2 w-[80%] h-[8px] outline-none rounded-[50px] bg-gradient-to-r from-pink-700 to-90% to-orange-400' style={{ width: "80%" }} />
                                <hr className='border-0 hover:scale-105 transition-all mt-4 md:mt-[22px] w-[80%] h-[8px] outline-none rounded-[50px] bg-gradient-to-r from-pink-700 to-90% to-orange-400' style={{ width: "80%" }} />
                                <hr className='border-0 hover:scale-105 transition-all mt-4 md:mt-[22px] w-[60%] h-[8px] outline-none rounded-[50px] bg-gradient-to-r from-pink-700 to-90% to-orange-400' style={{ width: "60%" }} />
                                <hr className='border-0 hover:scale-105 transition-all mt-4 md:mt-[22px] w-[70%] h-[8px] outline-none rounded-[50px] bg-gradient-to-r from-pink-700 to-90% to-orange-400' style={{ width: "70%" }} />
                                <hr className='border-0 hover:scale-105 transition-all mt-4 md:mt-[22px] w-[90%] h-[8px] outline-none rounded-[50px] bg-gradient-to-r from-pink-700 to-90% to-orange-400' style={{ width: "90%" }} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* acivement */}
                <div className="achievment my-10 flex flex-row justify-center text-center   md:my-[70px] md:gap-[200px]">
                    <div className="1 hover:scale-105 transition-all">
                        <h1 className='font-bold text-4xl md:text-5xl   text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-90% to-orange-400'>2+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="2 border-r-2 border-l-2 md:px-[70px] hover:scale-105 transition-all">
                        <h1 className='font-bold text-2xl  md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-100% to-orange-400'>1.5+</h1>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <div className="3 hover:scale-105 transition-all">
                        <h1 className='font-bold text-2xl   md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-90% to-orange-400'>1.2+</h1>
                        <p>HAPPY CLIENT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_me
