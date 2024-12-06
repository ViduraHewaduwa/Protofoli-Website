import React from 'react';
import Introimg from "./assets/intro.jpg";
import "./heroimg.css";
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask"> 
        <img className="intro-img" src={Introimg} alt="Intro Img" />
      </div>
      <div className='content'>
        <h1>Hi im Vidura</h1>
        <p> Front-End Devoloper</p>

        <div>
            <Link to="/Project"       
              className="btn">My Resume</Link>

          <Link to="/Contact"       
              className="btn-light">Contact</Link>

</div>
      </div>
    </div>
  );
};

export default HeroImg;
