import React from "react";

function Button({text, className, className2}) {
  return (
    <div
      className={`w-auto h-[57.2px] bg-black rounded-full border-none cursor-pointer group ${className2}`}
    >
      <button className={`w-full h-full text-xl -translate-[5px] group-hover:translate-[5px] bg-white border-2 border-black rounded-full px-[30px] py-3 cursor-pointer transition-all duration-300 ${className}`}>
        {text}
      </button>
    </div>
  );
}

export default Button;
