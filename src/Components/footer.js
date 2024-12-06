import "./footer.css";
import { FaHome, FaPhone,  FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Ratnapura, Srilanka</p>
              
              <div className="phone">
                <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+94-712-503-429</h4>
              </div>
              <div className="email">
                <p><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
               vidurahewaduwa@gmail.com</p> 
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>Hello there! 👋 I'm Vidura Hewaduwa, a passionate and dedicated university student with a love for front-end development. Currently immersed in the world of code and design, I find joy in creating visually appealing and user-friendly interfaces that bring ideas to life on the web.
          </p>
          <div className="social">
          <a href="https://web.facebook.com/vidura.hewauwa/" >
    <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
  </a>
  <a href="" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={30} style={{ color: "#fff", marginRight: "2rem" }} />
  </a>
  <a href="https://www.linkedin.com/in/vidura-hewaduwa-58aa16235/" >
    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
  </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
