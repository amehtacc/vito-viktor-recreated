import React from "react";
import { vitoviktor_Hero_section_background_image, Vitoviktor_superman_hero_section } from "../assets/images";
import Header from "../components/Header";

function Hero() {
  return (
    <div
      className="h-auto w-full bg-cover bg-center flex flex-col justify-start px-[72px] -mt-40"
      style={{
        backgroundImage: `url(${vitoviktor_Hero_section_background_image})`,
      }}
    >
      <div className="w-full pt-[270px] text-center">
        <div className="inline-block text-white">
          <h2 className="max-w-full text-9xl text-center">MEET VITO</h2>
          <div className="max-w-full text-4xl text-right">The little hippo</div>
        </div>
        <div className="-my-36 text-center flex flex-wrap items-center justify-center">
          <img className="w-[450px] h-auto" src={Vitoviktor_superman_hero_section} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
