import React from "react";
import { vitoviktor_Hero_section_background_image, Vitoviktor_superman_hero_section } from "../assets/images";
import Header from "../components/Header";

function Hero() {
  return (
    <section
      className="w-full h-auto bg-cover bg-center flex flex-col justify-start px-18 -mt-[204px]"
      style={{
        backgroundImage: `url(${vitoviktor_Hero_section_background_image})`,
      }}
    >
      <div className="w-full pt-[304px] text-center">
        <div className="inline-block text-white">
          <h2 className="max-w-full text-[9rem]/[1] text-center font-gulfs-expanded text-shadow-[3px_5px_0_black]">MEET VITO</h2>
          <div className="max-w-full text-[2rem]/[1] text-right font-gulfs-expanded text-shadow-[3px_5px_0_black]">The little hippo</div>
        </div>
        <div className="-mt-[105.8px] -mb-6 text-center flex flex-wrap items-center justify-center">
          <img className="w-[450px] h-auto" src={Vitoviktor_superman_hero_section} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
