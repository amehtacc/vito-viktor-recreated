import React from "react";

function SocialCard({image, text, className}) {
  return (
    <a
      href="#"
      className={`w-full h-[190px]  rounded-[28px] bg-[#72ddf7] flex items-center justify-center hover:bg-[#4ecde9] transition-all duration-300 grow min-w-[200px] md:min-w-64 ${className}`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mb-3.5">
            {image}
        </div>
        <div className="font-gulfs-expanded">
          <h3 className="text-xl text-[#023047]">{text}</h3>
        </div>
      </div>
    </a>
  );
}

export default SocialCard;
