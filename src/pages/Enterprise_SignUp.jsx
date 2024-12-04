import React from "react";
import Logo from "../assets/logo.svg";
import enterpriseImg from "../assets/enterprise.svg";

const Enterprise_SignUp = () => {
  return (
    <>
      <div className="max-w-[1920] w-full max-h-[1080px] h-full flex justify-between text-black font-inter font-normal overflow-hidden">
        {/* Left Div */}
        <div>
          <img
            src={enterpriseImg}
            className="z-[-2] max-w-[975px] h-[1080px]"
            alt=""
          />
          <div className="flex justify-between items-center px-8 py-6">
            <div className="flex items-center">
              {/* Placeholder for Logo */}
              <div className="w-[146px] h-[145px] mr-4">
                <img src={Logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterprise_SignUp;
