import React from "react";
import { Sad_Vito, vitoviktor_freezing, vitoviktor_happy_face } from "../assets/images";

function About() {
  return (
    <section className="relative w-full h-auto px-[72px] mt-[75px]">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="text-center">
            <h2 className="font-gulfs-extra-expanded text-2xl text-shadow-[2px_2px_0_rgba(114,221,247)] text-white" 
            style={{
                WebkitTextStroke: '1px rgba(114,221,247)',
            }}
            >ABOUT</h2>
        </div>
        <div className="w-full text-center font-gulfs-normal text-black text-[68.8px]">
            {" Once "}
            <span className="text-white text-shadow-[2px_2px_0_rgba(0,0,0)]" style={{
                WebkitTextStroke: '1px black',
            }}>abandoned</span>
            <img className="w-[68.8px]" src={Sad_Vito} alt="Sad_Vito" />
            {" in a cold "}
            <span>shelter</span>
            <img className="w-[70.46px]" src={vitoviktor_freezing} alt="vitoviktor_freezing" />
            {" , Vito waited—lonely"} <br /> {"but "}
            <span>hopeful</span>
            {" . "}
            <img className="w-[76.93px]" src={vitoviktor_happy_face} alt="vitoviktor_happy_face" />

        </div>
      </div>

      <div className="mt-[150px]"></div>
    </section>
  );
}

export default About;
