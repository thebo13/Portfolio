import "./heroimg.css";
import React from 'react'
import { Link } from "react-router-dom";

 const Heroimg = () => {
  return<div className="hero">
    <div className="mask">
        <img className="intro-img" src="/wom2.png" alt="intro" /> 
    </div>
    <div className="content">
    <p>Hey, I'm a Developer</p>
    <h1>React Developer</h1>
    <div>
    <Link to="/project" className="btn">Projects</Link>
    <Link to="/contact" className="btn btn-light">Contact</Link>
    </div>
    </div>
  </div>
  
}
export default Heroimg;