import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
function Faq() {
  const [faqIds, setFaqIds] = useState(1);

  const refFaq = useRef(null);
  const isFaqInView = useInView(refFaq, { amount: 0.2, once: true });

  function handleFaqs(id) {
    setFaqIds((prev) => (prev === id ? null : id));
    return;
  }

  return (
    <section
      id="faq"
      className="relative w-full px-18 pt-[220px] flex items-start justify-center gap-5"
    >
      <div className="w-[23%]">
        <h2
          className="font-gulfs-expanded text-white text-[4rem]/[1] text-shadow-[2px_2px_0_rgba(0,0,0)]"
          style={{ WebkitTextStroke: "1px black" }}
        >
          F.A.Q.
        </h2>
      </div>
      <motion.div
        ref={refFaq}
        initial={{ opacity: 0, x: 30 }}
        animate={isFaqInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-[77%]"
      >
        <div
          className={`flex flex-col items-start justify-start mb-10 ${
            faqIds == 1 ? "h-48" : "h-22"
          } overflow-hidden transition-all duration-300`}
        >
          <div
            className="w-full border border-black p-[25px] mb-[23px] rounded-[15px] flex items-center justify-between cursor-pointer"
            onClick={() => handleFaqs(1)}
          >
            <p className="font-space text-2xl text-[#1f2124]">
              What is the Vito NFT project all about?
            </p>
            <span
              className={`${
                faqIds == 1 ? "-rotate-180" : ""
              } transition-all duration-300`}
            >
              <svg
                height="30"
                aria-hidden="true"
                className="e-font-icon-svg e-fas-angle-down"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
              </svg>
            </span>
          </div>
          <div className="flex w-full items-center justify-start">
            <div className="w-[80%]">
              <p className="text-lg mb-[0.9rem]">
                @vitocollective is run by a small but passionate group of animal
                lovers, VitoCollective isn’t just another handle posting cute
                pet pics. It is a movement, sparked by a Bully XXL named Vito,
                whose soulful eyes inspired a mission to change lives—one dog at
                a time.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-start justify-start mb-10 ${
            faqIds == 2 ? "h-52" : "h-22"
          } overflow-hidden transition-all duration-300`}
        >
          <div
            className="w-full border border-black p-[25px] mb-[23px] rounded-[15px] flex items-center justify-between cursor-pointer"
            onClick={() => handleFaqs(2)}
          >
            <p className="font-space text-2xl text-[#1f2124]">
              What makes Vito NFTs unique?
            </p>
            <span
              className={`${
                faqIds == 2 ? "-rotate-180" : ""
              } transition-all duration-300`}
            >
              <svg
                height="30"
                aria-hidden="true"
                className="e-font-icon-svg e-fas-angle-down"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
              </svg>
            </span>
          </div>
          <div className="flex w-full items-center justify-start">
            <div className="w-[80%]">
              <p className="text-lg mb-[0.9rem]">
                Vito NFTs are unique from its 999 supply – each NFT will have an
                allocation for the coin that is the Vito Memecoin. The idea is
                to keep everything fun and keep rewarding our holders
              </p>
              <p className="text-lg mb-[0.9rem]">
                No roadmap but we are fully committed to building the Vito brand
                and IP !!!
              </p>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-start justify-start mb-10 ${
            faqIds == 3 ? "h-48" : "h-22"
          } overflow-hidden transition-all duration-300`}
        >
          <div
            className="w-full border border-black p-[25px] mb-[23px] rounded-[15px] flex items-center justify-between cursor-pointer"
            onClick={() => handleFaqs(3)}
          >
            <p className="font-space text-2xl text-[#1f2124]">
              Can I get early access?
            </p>
            <span
              className={`${
                faqIds == 3 ? "-rotate-180" : ""
              } transition-all duration-300`}
            >
              <svg
                height="30"
                aria-hidden="true"
                className="e-font-icon-svg e-fas-angle-down"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
              </svg>
            </span>
          </div>
          <div className="flex w-full items-center justify-start">
            <div className="w-[80%]">
              <p className="text-lg mb-[0.9rem]">
                yes you can currently get a WL and that will allow you to
                participate in the mint
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Faq;
