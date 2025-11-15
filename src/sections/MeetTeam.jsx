import React from "react";
import TeamCard from "../components/TeamCard";
import { Team_1, Team_2, Team_3, Team_4 } from "../assets/images";

function MeetTeam() {
  const teamDetails = [
    {
      image: Team_1,
      name: "SPIKE 11",
      designation: "CEO",
    },
    {
      image: Team_2,
      name: "PAPII",
      designation: "ADVISOR",
    },
    {
      image: Team_3,
      name: "JED_131",
      designation: "ADVISOR",
    },
    {
      image: Team_4,
      name: "JOUBREL",
      designation: "ARTIST",
    },
  ];
  return (
    <section
      id="team"
      className="relative w-full px-14 xl:px-18 pt-[220px] flex flex-col items-center justify-center gap-5"
    >
      <div className="pb-[35px] text-center">
        <h2
          className="font-gulfs-expanded text-white text-[3rem]/[1] xl:text-[4rem]/[1] text-shadow-[2px_2px_0_rgba(0,0,0)]"
          style={{
            WebkitTextStroke: "1px black",
          }}
        >
          MEET THE TEAM
        </h2>
      </div>

      <div className="w-full grid grid-cols-3 grid-flow-row gap-5">
        {teamDetails.map((team, index) => (
          <TeamCard
            key={index}
            image={team.image}
            name={team.name}
            designation={team.designation}
            delay={0.2 * index}
          />
        ))}
      </div>
    </section>
  );
}

export default MeetTeam;
