import React from 'react'
import Service_record from '../../assets/Service_Data.json'

const Services = () => {
    return (
        <div id='service' className='Services pt-[30px] container mx-auto'>

            <div className="service_title text-3xl mb-[40px] md:mb-[70px] flex justify-center md:text-5xl font-bold"><h1>My Services</h1></div>
                <div className='container mx-auto'>
                <div className="services_body flex p-3 mx-auto gap-[30px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                   {
                    
                    Service_record.map((service) => {
                        return <div className='border-2 rounded-lg p-6 cursor-pointer hover:scale-105 transition-all hover:border-pink-500 hover:bg-amber-950'>
                        <h2 className='mt-[30px] font-bold text-lg'>{service.s_id}</h2>
                        <h3 className='mt-3 w-full font-bold text-2xl'><span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-90% to-orange-400'>{service.s_title}</span></h3>
                        <p className='mt-2'>{service.s_desc}</p>
                        <p className='float-right border-2 hover:border-red-500 hover:scale-105 transition-all rounded-[50px] p-1 px-2 md:p-2 mt-4 mx-auto'>Read more...</p>
                        </div>
                    })
                   }
                </div>
                </div>
        </div>
    )
}

export default Services