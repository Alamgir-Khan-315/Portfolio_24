import React from 'react'
import test from '../../assets/th.jfif'
import Work_latest from '../../assets/Latest_work.json'

const Latest_work = () => {
  return (
    <div id='work' className=' latest_work container flex flex-col items-center mx-auto mt-[50px] md:mt-[40px]'>
      <div className=" title text-3xl md:text-4xl font-bold md:pt-[50px]">My Latest Work</div>

      {/* card */}
      <div className=" container card mt-[30px] grid grid-cols-2 gap-[30px] px-2 md:grid-cols-3">

        { Work_latest.map((work) => {
          return <div className='pic rounded-lg content-center hover:scale-105 transition-all hover:border-2 hover:border-orange-600'>
            <img className='rounded-lg w-full mx-auto' src={work.s_img} alt="Work img" />
            <h2 className='font-bold text-center mt-2'>{work.s_title}</h2>
          </div>
        } )}
      
      </div>

      <div className="button my-[30px] md:my-[40px] border-2 p-1 px-2 rounded-[50px] hover:border-orange-600 hover:scale-105 transition-all">Show more</div>
    </div>
  )
}

export default Latest_work
