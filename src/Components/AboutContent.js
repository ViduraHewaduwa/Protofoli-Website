import React from 'react'
import "./AboutContent.css"
import {Link } from 'react-router-dom'
 
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
         <h1>Who am i</h1>
         <p>Hello there! 👋 I'm Vidura Hewaduwa, a passionate and dedicated university student with a love for front-end development. Currently immersed in the world of code and design, I find joy in creating visually appealing and user-friendly interfaces that bring ideas to life on the web.</p>
         <Link to= "/Contact"> 
         <button className='btn'>Contact</button>
         </Link>
        </div>
        <div className='right'>

        </div>

      
    </div>
  )
}

export default AboutContent
