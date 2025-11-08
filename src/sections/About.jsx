import React from "react";
import {
  Sad_Vito,
  vitoviktor_freezing,
  vitoviktor_happy_face,
  Caline_Vito,
} from "../assets/images";
import Button from "../components/Button";

function About() {
  return (
    <section className="relative w-full mt-[75px] px-18">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="text-center">
          <h2
            className="font-gulfs-expanded text-[1.6rem]/[1] text-shadow-[2px_2px_0_rgba(114,221,247)] text-white"
            style={{
              WebkitTextStroke: "1px rgba(114,221,247)",
            }}
          >
            ABOUT
          </h2>
        </div>
        <div className="relative w-full text-center font-gulfs-expanded text-black text-[4.3rem] gap-5">
          {" Once "}
          <span
            className="text-white text-shadow-[2px_2px_0_rgba(0,0,0)]"
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            abandoned{" "}
          </span>
          <img className="w-[68.8px] inline" src={Sad_Vito} alt="Sad_Vito" />
          {" in a cold "}
          <span
            className="text-white text-shadow-[2px_2px_0_rgba(0,0,0)]"
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            shelter{" "}
          </span>
          <img
            className="w-[70.46px] inline"
            src={vitoviktor_freezing}
            alt="vitoviktor_freezing"
          />
          {" , Vito waited—lonely"} <br /> {"but "}
          <span
            className="text-white text-shadow-[2px_2px_0_rgba(0,0,0)]"
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            hopeful
          </span>
          {" . "}
          <img
            className="w-[76.93px] inline"
            src={vitoviktor_happy_face}
            alt="vitoviktor_happy_face"
          />
        </div>
      </div>

      <div className="mt-[150px] lg:h-[600px] flex items-center gap-[30px] mx-auto">
        <div className="font-space w-[50%] h-full text-center flex flex-col items-center justify-center gap-10">
          <div className="relative text-[1.7rem] flex flex-col max-w-[99%]">
            <p className="mb-3.5">
              Until one rainy day, <b>Celine</b>
              walked in and <b>everything changed</b>. She saw more than a{" "}
              <b>trembling pup </b>
              she saw
              <b> family</b>.
            </p>

            <p className="mb-3.5">
              Now Vito’s life is full of
              <b> love</b>,<b> belly rubs</b>, and endless
              <b> tail wags</b>
              . From shelter to superstar, <br />
              Vito proves: every underdog has a shot at glory.
            </p>
          </div>
          <Button className="font-bold" text="LEARN MORE" />
        </div>

        <div className="w-[50%] h-full flex items-center justify-center">
          <img
            className="rounded-[29px] h-full rotate-3 object-cover"
            src={Caline_Vito}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default About;