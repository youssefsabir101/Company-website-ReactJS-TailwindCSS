import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Blogs from './components/pages/Blogs';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Homepage />}/>
        <Route path="/about" element ={<About />}/>
        <Route path="/services" element ={<Services />}/>
        <Route path="/blogs" element ={<Blogs />}/>
        <Route path="/contact" element ={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
