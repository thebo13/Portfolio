import "./aboutcontent.css";
import { Link } from "react-router-dom";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am i?</h1>
            <p>I'm a react front-end developer.I create resposive secure websites for my clients</p>
            <Link to= "/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

            <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src="/woman.png" className="img" alt="..." />
            </div>
            <div className="img-stack bottom">
                <img src="/downloa.jpg" className="img" alt="..." />
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutContent;