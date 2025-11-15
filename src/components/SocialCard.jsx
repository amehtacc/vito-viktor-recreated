import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

function SocialCard({ image, text, className, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeInOut", delay }}
    >
      <a
        href="#"
        className={`w-full h-[190px] rounded-[28px] bg-[#72ddf7] flex items-center justify-center hover:bg-[#4ecde9] transition-all duration-300 grow ${className}`}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 xl:w-[85px] h-16 xl:h-[85px] mb-3.5">{image}</div>
          <div className="font-gulfs-expanded">
            <h3 className="xl:text-xl text-[#023047]">{text}</h3>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default SocialCard;
