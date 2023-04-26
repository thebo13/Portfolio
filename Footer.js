import "./footer.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container"></div>
    <div className="left">
        <div className="location">
            <FaHome size={20} style={{ color:"#fff", marginRight: "2rem"}} />
        <div>
            <p>123 Housing Society.</p>
            <p>Tirunelveli</p>
        </div>
        </div>
        <div className="phone">
           <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
            1-256-523-544</h4> 
        </div>
        <div className="email">
           <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
            thebo@gmail.com</h4> 
        </div>
    </div>
    <div className="right">
        <h4>About portfolio</h4>
        <p>The above content contains information about me and my skills.</p>
        <div className="social">
            <FaFacebook size={30} 
            style={{color: "#fff", marginRight:"1rem" }}/>
            <FaTwitter size={30} 
            style={{color: "#fff", marginRight:"1rem" }}/>
            <FaLinkedin size={30} 
            style={{color: "#fff", marginRight:"1rem" }}/>
        </div>
    
    </div>
    </div>
  )
}

export default Footer;