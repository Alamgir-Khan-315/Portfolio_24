import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About_me from './Components/About_me/About_me'
import Services from './Components/Services/Services'
import Latest_work from './Components/Latest work/Latest_work'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className=' p-0 m-0 bg-stone-950 text-white'>
      
      <Navbar/>
      <Hero/>
      <About_me/>
      <Services/>
      <Latest_work/>
      <Contact/>

    </div>
  )
}

export default App
