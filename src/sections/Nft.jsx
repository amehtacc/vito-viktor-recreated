import React, { useRef } from "react";
import Button from "../components/Button";
import {
  Vitoviktor_NFT_collection_1,
  Vitoviktor_NFT_collection_2,
  Vitoviktor_NFT_collection_3,
  Vitoviktor_NFT_collection_4,
  Vitoviktor_NFT_collection_5,
  Vitoviktor_NFT_collection_6,
  Vitoviktor_NFT_collection_7,
  Vitoviktor_NFT_collection_8,
  Vitoviktor_NFT_collection_9,
  Vitoviktor_NFT_collection_10,
  Vitoviktor_NFT_collection_11,
  Vitoviktor_NFT_collection_12,
} from "../assets/images";
import { motion, useInView } from "motion/react";

function Nft() {
  const refButton = useRef(null);
  const isButtonInView = useInView(refButton, { amount: 0.2, once: true });

  const images1 = [
    {
      image: Vitoviktor_NFT_collection_1,
    },
    {
      image: Vitoviktor_NFT_collection_2,
    },
    {
      image: Vitoviktor_NFT_collection_3,
    },
    {
      image: Vitoviktor_NFT_collection_4,
    },
    {
      image: Vitoviktor_NFT_collection_5,
    },
    {
      image: Vitoviktor_NFT_collection_6,
    },
  ];

  const images2 = [
    {
      image: Vitoviktor_NFT_collection_12,
    },
    {
      image: Vitoviktor_NFT_collection_11,
    },
    {
      image: Vitoviktor_NFT_collection_10,
    },
    {
      image: Vitoviktor_NFT_collection_9,
    },
    {
      image: Vitoviktor_NFT_collection_8,
    },
    {
      image: Vitoviktor_NFT_collection_7,
    },
  ];

  return (
    <section
      id="nft"
      className="relative w-full pt-[220px] flex flex-col items-center justify-center gap-5"
    >
      <div className="w-full flex flex-col items-center justify-center gap-5 pb-5">
        <div className="text-center">
          <h2
            className="font-gulfs-expanded text-[1.6rem]/[1] text-shadow-[2px_2px_0_rgba(114,221,247)] text-white"
            style={{
              WebkitTextStroke: "1px rgba(114,221,247)",
            }}
          >
            NFT
          </h2>
        </div>
        <div className="text-center">
          <h2
            className="font-gulfs-expanded text-white text-[4rem]/[1] text-shadow-[2px_2px_0_rgba(0,0,0)]"
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            THE COLLECTION
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-5 pb-5">
        <div className="w-full grid grid-cols-6 grid-flow-row gap-5">
          {images2.map((img, index) => (
            <div key={index} className="w-full h-[290px]">
              <img
                className="w-full h-full object-cover rounded-[15px]"
                src={img.image}
                alt={img.image}
              />
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center gap-5">
          {images1.map((img, index) => (
            <div key={index} className="w-full h-[290px]">
              <img
                className="w-full h-full object-cover rounded-[15px]"
                src={img.image}
                alt={img.image}
              />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        ref={refButton}
        initial={{ opacity: 0, y: 30 }}
        animate={isButtonInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="pt-[25px] font-space"
      >
        <Button text="STAY UP-TO-DATE" className="font-bold" />
      </motion.div>
    </section>
  );
}

export default Nft;
