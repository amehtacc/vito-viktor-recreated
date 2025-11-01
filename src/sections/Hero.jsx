import React from "react";
import { vitoviktor_Hero_section_background_image } from "../assets/images";
function Hero() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${vitoviktor_Hero_section_background_image})`,
      }}
    >
        
    </div>
  );
}

export default Hero;