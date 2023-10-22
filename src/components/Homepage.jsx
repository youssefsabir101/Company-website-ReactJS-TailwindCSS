import React, { useEffect } from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Prices from './Prices';
import CallToAction from './CallToAction';
import Review from './Review';
import Footer from './Footer';
function Homepage() {
  useEffect(() => {
    document.title="SabirSolutions | Home";
},[]);
  return (
    <>
      <Navbar />
      <Hero />
      
      <div className="bg-gradient-to-br from-blue-100">
        
        <Features />
        <Prices />
        <CallToAction />
        <Review />
        <Footer />
      </div>
    </>
    
  )
}
export default Homepage;