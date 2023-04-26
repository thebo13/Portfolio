import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg2 from './Heroimg2';
import AboutContent from './AboutContent';

 const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="About" text="I'm a Front-End Developer"/>
      <AboutContent />
      <Footer />
      </div>
  )
}
export default About;