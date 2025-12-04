import React, { useRef } from "react";
import {
  vitoviktor_Hero_section_background_image,
  Vitoviktor_superman_hero_section,
  vitoviktor_happyface,
} from "../assets/images";
import { motion, useInView, useScroll, useTransform } from "motion/react";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["60px", "-70px"]);

  return (
    <section
      ref={ref}
      className="w-full h-auto bg-cover bg-center flex flex-col justify-start px-5 md:px-14 xl:px-18 -mt-[204px]"
      style={{
        backgroundImage: `url(${vitoviktor_Hero_section_background_image})`,
      }}
    >
      <div className="w-full pt-[270px] md:pt-[304px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="inline-block text-white"
        >
          <h2 className="max-w-full text-[2.5rem]/[1] md:text-[6rem]/[1] xl:text-[9rem]/[1] text-center font-gulfs-expanded text-shadow-[2px_3px_0_black] md:text-shadow-[3px_5px_0_black]">
            MEET VITO
          </h2>
          <div className="max-w-full md:text-[1.3rem]/[1] xl:text-[2rem]/[1] text-right font-gulfs-expanded text-shadow-[2px_3px_0_black] md:text-shadow-[3px_5px_0_black]">
            The little hippo
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ translateY: yHero }}
          className="md:-mt-[77px] xl:-mt-[107px] text-center flex flex-wrap items-center justify-center"
        >
          <img
            className="w-60 md:w-[350px] xl:w-[450px] h-auto"
            src={Vitoviktor_superman_hero_section}
            alt="Vitoviktor_superman_hero_section"
          />
        </motion.div>
      </div>

      <a href="#about" className="absolute left-22 md:left-[250px] xl:left-[440px] top-64 md:top-[350px] xl:top-[400px]">
        <div className="relative flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 250 250"
            className="w-16 md:w-[120px] h-16 md:h-[120px] absolute animate-spin-slow font-space font-semibold"
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
            className="w-[35px] md:w-[85px] object-contain"
            src={vitoviktor_happyface}
            alt="vitoviktor_happyface"
          />
        </div>
      </a>
    </section>
  );
}

export default Hero;
