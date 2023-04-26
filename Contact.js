import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg2 from './Heroimg2';
import Form from './Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Contact" text="Let's have a chat"/>
      <Form />
      <Footer />
    </div>
  );
}
export default Contact;