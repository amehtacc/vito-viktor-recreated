import React from "react";

function Button({text, className}) {
  return (
    <div
      className={`w-auto h-[57.2px] bg-black rounded-full border-none cursor-pointer group ${className}`}
    >
      <button className="w-full h-full text-xl -translate-1 group-hover:translate-1 bg-white border-2 border-black rounded-full px-[30px] py-3 cursor-pointer transition-all duration-300">
        {text}
      </button>
    </div>
  );
}

export default Button;
