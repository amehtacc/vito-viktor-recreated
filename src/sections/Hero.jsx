import React, { useRef } from "react";
import {
  vitoviktor_Hero_section_background_image,
  Vitoviktor_superman_hero_section,
  vitoviktor_happyface,
} from "../assets/images";
import { motion, useInView } from "motion/react";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section
      ref={ref}
      className="w-full h-auto bg-cover bg-center flex flex-col justify-start px-18 -mt-[204px]"
      style={{
        backgroundImage: `url(${vitoviktor_Hero_section_background_image})`,
      }}
    >
      <div className="w-full pt-[304px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="inline-block text-white"
        >
          <h2 className="max-w-full text-[9rem]/[1] text-center font-gulfs-expanded text-shadow-[3px_5px_0_black]">
            MEET VITO
          </h2>
          <div className="max-w-full text-[2rem]/[1] text-right font-gulfs-expanded text-shadow-[3px_5px_0_black]">
            The little hippo
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="-mt-[105.8px] -mb-6 text-center flex flex-wrap items-center justify-center"
        >
          <img
            className="w-[450px] h-auto"
            src={Vitoviktor_superman_hero_section}
            alt=""
          />
        </motion.div>
      </div>

      <a href="#about" className="absolute left-[440px] top-[400px]">
        <div className="relative flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 250 250"
            className="absolute animate-spin-slow font-space font-semibold"
          >
            <path
              id="circlePath"
              d="M125,125m-100,0a100,100 0 1,1 200,0a100,100 0 1,1 -200,0"
              fill="none"
            ></path>
            <text fontSize="30">
              <textPath href="#circlePath" startOffset="0%">
                SCROLL TO EXPLORE • SCROLL TO EXPLORE •
              </textPath>
            </text>
          </svg>
          <img
            className="w-[85px] h-[85px] object-contain z-10"
            src={vitoviktor_happyface}
            alt="vitoviktor_happyface"
          />
        </div>
      </a>
    </section>
  );
}

export default Hero;
