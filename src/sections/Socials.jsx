import React from "react";
import SocialCard from "../components/SocialCard";
import {
  vitoviktor_coin_1,
  vitoviktor_coin_2,
  Vito_Story,
} from "../assets/images";
import Button from "../components/Button";

function Socials() {
  const socials = [
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 110 85"
          fill="none"
        >
          <path
            d="M93.1805 7.11873C86.06 3.79312 78.4464 1.37621 70.4866 0C69.5091 1.76425 68.367 4.13721 67.5796 6.0249C59.1181 4.75465 50.7345 4.75465 42.4286 6.0249C41.6414 4.13721 40.4734 1.76425 39.4871 0C31.5187 1.37621 23.8964 3.802 16.7759 7.13634C2.41378 28.801 -1.47955 49.9274 0.467118 70.754C9.99282 77.8549 19.2244 82.1685 28.3001 84.9913C30.541 81.9127 32.5395 78.64 34.2612 75.191C30.9822 73.9473 27.8416 72.4124 24.8741 70.6305C25.6614 70.0483 26.4314 69.4396 27.1754 68.8133C45.2751 77.264 64.9408 77.264 82.8242 68.8133C83.5769 69.4396 84.3469 70.0483 85.1255 70.6305C82.1493 72.4211 79.0001 73.956 75.7211 75.1999C77.4427 78.64 79.4327 81.9215 81.6821 85C90.7666 82.1773 100.007 77.8638 109.532 70.754C111.817 46.6107 105.631 25.6782 93.1805 7.11873ZM36.7271 57.9458C31.2937 57.9458 26.8379 52.8825 26.8379 46.7165C26.8379 40.5506 31.1986 35.4785 36.7271 35.4785C42.2557 35.4785 46.7113 40.5417 46.6162 46.7165C46.6248 52.8825 42.2557 57.9458 36.7271 57.9458ZM73.2726 57.9458C67.8392 57.9458 63.3835 52.8825 63.3835 46.7165C63.3835 40.5506 67.7439 35.4785 73.2726 35.4785C78.801 35.4785 83.2568 40.5417 83.1617 46.7165C83.1617 52.8825 78.801 57.9458 73.2726 57.9458Z"
            fill="#023047"
          ></path>
        </svg>
      ),
      text: "DISCORD",
      rotate: "hover:rotate-3",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 360 360"
          fill="none"
        >
          <path
            d="M360 180C360 279.411 279.411 360 180 360C80.5887 360 0 279.411 0 180C0 80.5887 80.5887 0 180 0C279.411 0 360 80.5887 360 180Z"
            fill="#023047"
          ></path>
          <path
            d="M252.236 212.672C245.99 221.042 232.85 234.938 225.542 234.938H191.576V212.654H218.63C222.5 212.654 226.19 211.088 228.854 208.334C242.75 193.934 250.778 176.798 250.778 158.42C250.778 127.064 227.342 99.344 191.558 82.64V67.664C191.558 61.22 186.338 56 179.894 56C173.45 56 168.23 61.22 168.23 67.664V73.874C158.204 70.94 147.584 68.708 136.496 67.43C154.856 87.374 166.07 114.05 166.07 143.3C166.07 169.526 157.106 193.61 142.04 212.69H168.23V235.01H129.89C124.706 235.01 120.494 230.816 120.494 225.614V215.858C120.494 214.148 119.108 212.744 117.38 212.744H66.836C65.846 212.744 65 213.554 65 214.544C64.964 254.468 96.554 284.438 134.336 284.438H240.986C266.546 284.438 277.976 251.678 292.952 230.834C298.766 222.77 312.716 216.29 316.946 214.49C317.72 214.166 318.17 213.446 318.17 212.6V199.64C318.17 198.326 316.874 197.336 315.596 197.696C315.596 197.696 253.946 211.862 253.226 212.06C252.506 212.276 252.236 212.69 252.236 212.69V212.672Z"
            fill="#72DDF7"
          ></path>
          <path
            d="M146.428 143.244C146.428 123.138 139.534 104.634 128.014 90L70 190.386H132.406C141.28 176.85 146.446 160.65 146.446 143.262L146.428 143.244Z"
            fill="#72DDF7"
          ></path>
        </svg>
      ),
      text: "OPENSEA",
      rotate: "hover:-rotate-3",
    },
    {
      image: (
        <svg
          aria-hidden="true"
          width="85"
          height="85"
          class="e-font-icon-svg e-fab-x-twitter"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#023047"
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          ></path>
        </svg>
      ),
      text: "X",
      rotate: "hover:rotate-3",
    },
    {
      image: (
        <svg
          aria-hidden="true"
          width="85"
          height="85"
          class="e-font-icon-svg e-fab-instagram"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#023047"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          ></path>
        </svg>
      ),
      text: "INSTAGRAM",
      rotate: "hover:-rotate-3",
    },
    {
      image: (
        <svg
          aria-hidden="true"
          width="85"
          height="85"
          class="e-font-icon-svg e-fab-tiktok"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#023047"
            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
          ></path>
        </svg>
      ),
      text: "TIKTOK",
      rotate: "hover:rotate-3",
    },
  ];
  return (
    <section id="follow-us" className="relative w-full px-18">
      <div className="w-full pt-[220px] flex flex-col gap-5">
        <div className="text-left flex flex-col items-start justify-start gap-5">
          <div className="">
            <h2
              className="font-gulfs-expanded text-[1.6rem]/[1] text-shadow-[2px_2px_0_rgba(114,221,247)] text-white"
              style={{
                WebkitTextStroke: "1px rgba(114,221,247)",
              }}
            >
              SOCIALS
            </h2>
          </div>
          <div className="">
            <h2
              className="font-gulfs-expanded text-white text-[4rem]/[1] text-shadow-[2px_2px_0_rgba(0,0,0)]"
              style={{
                WebkitTextStroke: "1px black",
              }}
            >
              FOLLOW US
            </h2>
          </div>
        </div>

        <div className="w-full grid grid-cols-5 grid-rows-1 grid-flow-row gap-5">
          {socials.map((social) => (
            <SocialCard
              image={social.image}
              text={social.text}
              className={social.rotate}
            />
          ))}
        </div>
      </div>

      <div id="coin" className="relative w-full pt-[220px]">
        <div className="absolute top-[103px] left-11">
          <img
            className="w-44 h-44"
            src={vitoviktor_coin_1}
            alt="vitoviktor_coin_1"
          />
        </div>

        <div className="absolute top-10 right-20">
          <img
            className="w-44 h-44"
            src={vitoviktor_coin_2}
            alt="vitoviktor_coin_2"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="text-center">
              <h2
                className="font-gulfs-expanded text-white text-[4rem]/[1] text-shadow-[2px_2px_0_rgba(0,0,0)] tracking-[9.5px]"
                style={{
                  WebkitTextStroke: "1px black",
                }}
              >
                {"OUR COIN IS"} <br /> {"LAUNCHING SOON"}
              </h2>
            </div>
            <div className="bg-[#72ddf7] my-[50px] py-[30px] px-10 rounded-2xl">
              <h2 className="text-[#023047] text-[2.9rem]/[1] font-gulfs-expanded tracking-[9.5px]">
                TO BE ANNOUNCED!
              </h2>
            </div>
          </div>

          <div className="font-space flex items-center justify-center gap-[150px]">
            <div>
              <h2 className="font-light text-[2rem]/[1]">
                Stay up-to-date, don't miss out
              </h2>
            </div>
            <div>
              <Button text="MORE INFO" className="font-bold" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full pt-[220px]">
        <div className="h-[600px] w-full bg-[#72ddf7] rounded-[55px] flex items-center justify-between gap-5 px-10">
          <div className="w-1/2 flex flex-col items-center justify-center gap-5">
            <div className="text-center">
              <h2
                className="font-gulfs-expanded text-white text-[2.5rem]/[1] text-shadow-[2px_2px_0_rgba(0,0,0)]"
                style={{
                  WebkitTextStroke: "1px black",
                }}
              >
                {"VITO’S STORY"} <br /> {" HELPS SHELTERS"}
              </h2>
            </div>
            <div className="text-center font-space text-[1.3rem] max-w-[85%]">
              <p className="mb-[0.9rem] w-full">
                Vito’s rescue went viral — but the mission is just starting.
              </p>
              <p className="mb-[0.9rem] w-full">
                We’re using his story to support dog shelters and help more pups
                find home.
              </p>
            </div>
            <div className="font-space">
              <Button text="VITO’S STORY" className="font-bold" />
            </div>
          </div>

          <div className="w-1/2 rotate-2 flex flex-col items-center justify-center">
            <img
              className="rounded-[55px] w-[530px] h-[500px] object-cover shadow-[15px_15px_0_rgba(0,0,0)]"
              src={Vito_Story}
              alt="Vito_Story"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Socials;
