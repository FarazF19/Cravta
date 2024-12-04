import React from "react";
import Logo from "../assets/logo.svg";
import Image from "../assets/design.svg";
import Button from "../components/Button";

const OnboardingScreen = () => {
  return (
    <div className="max-w-[1920] w-full max-h-[1080px] h-full text-black font-inter font-normal overflow-hidden">
      {/* Top Section with Logo */}
      <div className="flex justify-between items-center px-8 ">
        <div className="flex items-center">
          {/* Placeholder for Logo */}
          <div className="w-16 h-16 mr-4">
            <img src={Logo} alt="" />
          </div>
          <h1 className="text-[70px] font-inter text-black">Cravta</h1>
        </div>
      </div>
      <div className=" flex flex-col justify-center text-center mt-5 w-full items-center">
        <p className="text-[75px] w-[1050px] h-[215px] font-inter leading-[80px]  ">
          Ready to Transform your training with engaging gamified learning?
        </p>
        <div className="flex justify-center gap-5 items-center mt-12">
          <Button />
          <Button
            text="Join as a Team"
            bgColor="bg-[#78206E]"
            textColor="text-[#EFBF13]"
          />
        </div>
      </div>

      {/* Bottom-right image container */}
      <div className="flex justify-end items-end">
        <img
          src={Image}
          alt="Bottom-right decorative"
          className="max-w-[770px] h-[250px] " // Adjust the size as needed
        />
      </div>
    </div>
  );
};

export default OnboardingScreen;
