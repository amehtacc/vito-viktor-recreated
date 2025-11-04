import React from "react";

function Button({text}) {
  return (
    <div
      className={`w-40 h-14 bg-black rounded-full border-none cursor-pointer group`}
    >
      <button className="w-full h-full text-xl -translate-1 group-hover:translate-1 bg-white border-2 border-black rounded-full px-7 py-3 cursor-pointer transition-all duration-300">
        {text}
      </button>
    </div>
  );
}

export default Button;
