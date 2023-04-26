import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg2 from './Heroimg2';
import PricingCard from './PricingCard';
import  Work  from './Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Project" 
      text="Some of my most recent works"/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}
export default Project;