import React from "react";
import TeamCard from "../components/TeamCard";
import { Team_1, Team_2, Team_3, Team_4 } from "../assets/images";

function MeetTeam() {
    const teamDetails =[
        {
            image: Team_1,
            name: "",
            designation: "CEO"
        },
        {
            image: Team_2,
            name: "",
            designation: "ADVISOR"
        },
        {
            image: Team_3,
            name: "",
            designation: "ADVISOR"
        },
        {
            image: Team_4,
            name: "",
            designation: "ARTIST"
        },
    ]
  return (
    <section className="relative w-full px-18 pt-[220px] flex flex-col items-center justify-center gap-5">
      <div className="pb-[35px] text-center">
        <h2
          className="font-gulfs-expanded text-white text-[4rem]/[1] text-shadow-[2px_2px_0_rgba(0,0,0)]"
          style={{
            WebkitTextStroke: "1px black",
          }}
        >
          MEET THE TEAM
        </h2>
      </div>

      <div className="w-full grid grid-cols-3 grid-flow-row gap-5">
        <TeamCard />
      </div>
    </section>
  );
}

export default MeetTeam;
