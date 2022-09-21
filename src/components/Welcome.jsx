import React from "react";
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Newsletter from './Newsletter';

const Welcome = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Welcome;
