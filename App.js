import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route  }from "react-router-dom"
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Contact from "./Components/Contact";


const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );

}
export default App;
