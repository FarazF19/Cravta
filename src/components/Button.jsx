import React from "react";

const Button = ({
  text = "Join as a Team", // Default button text
  bgColor = "bg-[#EFBF13]", // Default background color
  textColor = "text-purple-800", // Default text color
  size = "px-4 py-2", // Default padding size
  textSize = "text-[20px]",
  rounded = "rounded-full", // Default border radius
  onClick, // Click handler
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${size} ${rounded} ${textSize} font-semibold hover:opacity-90 transition w-[323px] h-[77px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
