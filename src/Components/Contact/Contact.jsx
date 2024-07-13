import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  return (
    <div id='contact' className='contact container mx-auto'>
      <div className='title text-center mt-4 text-3xl md:text-4xl font-bold'>Get in touch</div>

      {/* table */}
      <div className="table_conttant p-4 mt-[20px] md:mt-[40px] flex flex-col md:flex-row gap-[40px] md:gap-[80px]">

        <div className="info">
          <h1 className='font-bold text-2xl md:text-3xl md:mt-[30px] text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-90% to-orange-400'>Let's talk</h1>
          <p className='mt-[10px] md:mt-[20px] text-center'>I'm currently avalible on your project, so feel better to send me a message about anything that you want me to work on. You can contact anytime.</p>

          <div className="contact_item md:mt-[40px] mt-5">
            <div className="email flex gap-5 items-center">
              <MdEmail />alamgirkhqwer@gmail.com
            </div>
            <div className="CALL flex gap-5 items-center">
              <MdCall /> +92 315 4572266</div>
            <div className="LOCATION flex gap-5 items-center">
              <FaLocationDot /> Karachi, Pakistan</div>
          </div>
        </div>

        <form className="form md:w-full flex flex-col gap-1">
          <label htmlFor="Your Name">Your Name</label>
          <input className='bg-gray-600 p-2 m-1 rounded-lg' placeholder='Enter your name' type="text" required />
          <label htmlFor="Your Name">Your Email</label>
          <input className='bg-gray-600 p-2 m-1 rounded-lg' placeholder='Enter your email' type="email" required />
          <label htmlFor="Your Name">Write your message here</label>
          <textarea className='bg-gray-600 p-2 m-1 rounded-lg' placeholder='Enter your message' name="message" rows="6" id=""></textarea>
        </form>

      </div>

      <div type='submit' className="cursor-pointer button p-2 min-w-[100px] max-w-[130px] mx-auto mt-[30px] text-center hover:scale-105 transition-all rounded-[50px] bg-gradient-to-r from-pink-700 to-90% to-orange-400">Submit now</div>
      <div className='h-[50px]'></div>

    </div>
  )
}

export default Contact
