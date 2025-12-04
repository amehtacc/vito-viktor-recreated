import React, { useState, useRef } from "react";
import {
  vitoviktor_music,
  vitoviktor_listening_to_music,
  viktor_music,
} from "../assets/images";
import { useInView } from "motion/react";

function VitoSongPlay() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);
  
  const playerRef = useRef(null);
  const isPlayerInView = useInView(playerRef)

  function playAudio() {
    setPlay((prev) => !prev);

    if (!play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  return (
    <div ref={playerRef} className="w-full pt-5 md:pt-12 pl-2 md:pl-[1.8rem]">
      <div className={`w-full ${isPlayerInView ? "relative" : "fixed bottom-6"} z-1`}>
        <div className="max-w-fit flex items-center justify-center border border-[rgb(8,54,66)] rounded-full px-3 py-1.5 md:px-4 md:py-2 gap-4 md:gap-6">
          <img
            className="w-10 md:w-14 xl:w-16 h-10 md:h-14 xl:h-16"
            src={play ? vitoviktor_listening_to_music : vitoviktor_music}
            alt="vitoviktor_music"
          />
          <div
            className={`items-center gap-1 ${play ? "flex" : "hidden"}`}
            id="music-animation"
          >
            <div
              style={{
                width: "3px",
                height: "10px",
                background: "#083642",
                animation: "bar 1s infinite ease-in-out",
              }}
            ></div>
            <div
              style={{
                width: "3px",
                height: "14px",
                background: "#083642",
                animation: "bar 1s 0.1s infinite ease-in-out",
              }}
            ></div>
            <div
              style={{
                width: "3px",
                height: "8px",
                background: "#083642",
                animation: "bar 1s 0.2s infinite ease-in-out",
              }}
            ></div>
          </div>
          <img
            className="w-7 md:w-9 xl:w-[42px] h-7 md:h-9 xl:h-[42px] cursor-pointer"
            src={
              play
                ? "https://vitoviktor.be/wp-content/uploads/2025/08/pause-button-blue.svg"
                : "https://vitoviktor.be/wp-content/uploads/2025/08/play-button.svg"
            }
            alt="play-button"
            onClick={playAudio}
          />
        </div>
        <audio ref={audioRef} className="hidden" src={viktor_music}></audio>
      </div>
    </div>
  );
}

export default VitoSongPlay;
