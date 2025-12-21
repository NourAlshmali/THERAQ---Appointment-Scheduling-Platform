import React from "react";
import FindDoctor from "./FindDoctor";
import Reviews from "./Reviews";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="find-doctor">
        <FindDoctor />
      </div>
      <div id="Reviews">
        <Reviews />
      </div>
      <div id="AboutUs">
        <AboutUs />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    
    </>
  );
};

export default Home;
