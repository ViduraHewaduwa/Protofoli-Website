import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'

import Footer from  '../Components/footer'
import Work from '../Components/Work'



const Project = () => {
  return (
    <div>
      <Navbar/>
     <Heroimg2 heading="PROJECTS." text="Some of my recent works"/>
     <Work/>
      <Footer/>
    </div>
  )
}

export default Project
