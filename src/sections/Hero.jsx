import React from "react";
import { vitoviktor_Hero_section_background_image } from "../assets/images";
import Header from "../components/Header";

function Hero() {
  return (
    <div
      className="h-auto w-full bg-cover bg-center flex justify-start"
      style={{
        backgroundImage: `url(${vitoviktor_Hero_section_background_image})`,
      }}
    >
       
      <Header />
        
    </div>
  );
}

export default Hero;