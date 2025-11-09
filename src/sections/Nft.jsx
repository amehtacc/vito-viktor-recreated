import React from "react";
import Button from "../components/Button";

function Nft() {
  return (
    <section className="relative w-full px-18 pt-[220px] flex flex-col items-center justify-center gap-5">
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

      <div></div>

      <div className="pt-[25px] font-space">
        <Button text="STAY UP-TO-DATE" className="font-bold" />
      </div>
    </section>
  );
}

export default Nft;
