import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'


import Footer from  '../Components/footer'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
   <div>
    <Navbar/>
     <Heroimg2 heading="About."/>
     <AboutContent/>
      <Footer/>
   </div>
  )
}

export default About
