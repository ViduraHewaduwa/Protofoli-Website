import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg from  '../Components/heroimg'
import Footer from  '../Components/footer'
import Work from '../Components/Work'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
