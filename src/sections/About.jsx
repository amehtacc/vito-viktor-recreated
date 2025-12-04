import React, { useRef } from "react";
import {
  Sad_Vito,
  vitoviktor_freezing,
  vitoviktor_happy_face,
  Caline_Vito,
} from "../assets/images";
import Button from "../components/Button";
import { motion, useInView } from "motion/react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section id="about" className="relative w-full mt-[75px] px-5 md:px-14 xl:px-18">
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
        <div className="relative w-full text-center font-gulfs-expanded text-black text-[1.5rem] md:text-[3rem] xl:text-[4.3rem] gap-5">
          {" Once "}
          <span
            className="text-white text-shadow-[2px_2px_0_rgba(0,0,0)]"
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            abandoned{" "}
          </span>
          <img className="w-6 md:w-[68.8px] inline" src={Sad_Vito} alt="Sad_Vito" loading="lazy"/>
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
            className="w-6 md:w-[70.46px] inline"
            src={vitoviktor_freezing}
            alt="vitoviktor_freezing"
            loading="lazy"
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
            className="w-6 md:w-[76.93px] inline"
            src={vitoviktor_happy_face}
            alt="vitoviktor_happy_face"
            loading="lazy"
          />
        </div>
      </div>

      <div
        ref={ref}
        className="mt-[150px] xl:h-[600px] flex flex-col md:flex-row items-center gap-12 md:gap-[30px] mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="font-space md:w-[50%] h-full text-center flex flex-col items-center justify-center gap-10"
        >
          <div className="relative text-[1.3rem] xl:text-[1.7rem] flex flex-col max-w-[99%]">
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
        </motion.div>

        <div className="md:w-[50%] h-full flex items-center justify-center">
          <img
            className="rounded-[29px] h-full rotate-3 object-cover"
            src={Caline_Vito}
            alt="Caline_Vito"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
