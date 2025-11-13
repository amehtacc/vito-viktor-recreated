import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

function TeamCard({ image, name, designation, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeInOut", delay }}
      className="w-full h-full py-[35px] border-[0.8px] border-black rounded-[1.875rem] flex flex-col items-center justify-center gap-5"
    >
      <div>
        <img className="w-47 h-47 rounded-full" src={image} alt={name} />
        <div className="text-center">
          <h3 className="mt-2 mb-[3px] text-xl font-gulfs-expanded text-[#023047]">
            {name}
          </h3>
          <p className="font-space">{designation}</p>
        </div>
      </div>
      <div className="w-[3.1rem] h-[3.1rem] border-[0.8px] border-black rounded-full flex items-center justify-center shadow-[2px_4px_0_0_rgba(0,0,0)] hover:scale-90 transition-all duration-300">
        <a href="#">
          <span>
            <svg
              aria-hidden="true"
              class="e-font-icon-svg e-fab-x-twitter"
              width="24px"
              height="24px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </span>
        </a>
      </div>
    </motion.div>
  );
}

export default TeamCard;
