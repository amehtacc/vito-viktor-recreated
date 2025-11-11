import React, { useState, useRef } from "react";
import {
  vitoviktor_music,
  vitoviktor_listening_to_music,
  viktor_music,
} from "../assets/images";
function VitoSongPlay() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  function playAudio() {
    setPlay((prev) => !prev);

    if (!play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  return (
    <div className="w-full pt-12 pl-[1.8rem]">
      <div className="w-full">
        <div className="max-w-fit flex items-center justify-center border border-[rgb(8,54,66)] rounded-full px-4 py-2 gap-6">
          <img
            className="w-16 h-16"
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
            className="w-[42px] h-[42px] cursor-pointer"
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
