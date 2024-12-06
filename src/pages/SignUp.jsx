import React from "react";
import Logo from "../assets/logo.svg";
import enterpriseImg from "../assets/signup.svg";
import apple from "../assets/apple.svg";
import Image from "../assets/design.svg";
import line from "../assets/line.svg";
import flower from "../assets/object.svg";

const SignUp = () => {
  return (
    <div className="flex justify-between max-w-[1920px] max-h-[795px] h-full overflow-clip">
      {/* Left Section */}
      <div className="relative text-black font-inter font-normal ">
        {/* Background Image and Gradient Overlay */}
        <div className="relative w-[700px] h-[793px] mx-auto">
          <img
            src={enterpriseImg}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Enterprise Background"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#78206E]/60 z-10"></div>

          {/* Centered Text at the Bottom */}
          <p className="absolute bottom-0 left-[45%] z-30  -ml-5 transform -translate-x-1/2  w-[491px] text-left h-[261px] font-inter text-[60px] leading-[70px] text-white">
            Learning never felt this fun!
          </p>
        </div>

        {/* Logo on Top */}
        <div className="absolute top-8 left-12 z-20">
          <img src={Logo} alt="Logo" className="w-[110px] h-[110px]" />
        </div>

        <div className="absolute top-0   z-20 ">
          <img
            src={flower}
            alt="Logo"
            className="w-[230px] h-[230px] ml-[520px]  "
          />
        </div>
        <div className="absolute bottom-0 left-0  z-20 ">
          <img src={flower} alt="Logo" className="w-[260px] h-[250px] " />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white px-10 py-8 relative">
        {/* Top-right "Already a member?" Section */}
        <div className="absolute top-5 right-5 flex items-center">
          <p className="text-black  text-[14px] leading-[14px]">
            Already a member?{" "}
            <span className="text-[#831B61] font-semibold cursor-pointer">
              Sign In
            </span>
          </p>
          <div className="ml-4 w-[43px] h-[43px] flex justify-center items-center bg-[#EEF4FE] rounded-full shadow-md cursor-pointer">
            <span className="text-lg font-bold">⋮</span>
          </div>
        </div>

        {/* Sign-up Content Section */}
        <div className="mt-10 flex flex-col items-start font-inter ml-5  w-[694px] h-[716px]">
          <h2 className="text-[#831B61] w-[248px] h-[21px] text-[29px] mb-10 mt-10">
            Sign up to Cravta
          </h2>
          <div className="flex gap-4 mb-6 font-inter">
            <button className="bg-[#F0C013] w-[328px] h-[60px] font-semibold px-6 py-5 text-center rounded-3xl shadow-2xl">
              <p className="text-[#8F316F]">Sign up with Google</p>
            </button>
            <button className="bg-[#EEF4FE] flex flex-row justify-center gap-1 w-[331px] h-[60px] font-semibold py-5 px-6 rounded-3xl shadow-2xl">
              <img src={apple} alt="" />
              <p className="text-[#8F316F]">Sign up with Apple</p>
            </button>
          </div>
          <div className="mt-5 w-[573px] h-[525px]">
            <img src={line} alt="" className="mb-5" />
            <p className="text-[#71778F] text-[15px] mb-4">
              Or sign up using your email address
            </p>
            <div className="grid grid-cols-2 gap-4 font-inter">
              <div>
                <label htmlFor="" className="text-[14px] text-[#831B61] ">
                  Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-[270px] h-[50px] px-4 py-2  bg-[#EEF4FE] rounded-2xl"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[14px] text-[#831B61]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="w-[270px] h-[50px] px-4 py-2  bg-[#EEF4FE] rounded-2xl"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-[14px] text-[#831B61]"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder=""
                  className="w-[270px] h-[50px] px-4 py-2  bg-[#EEF4FE] rounded-2xl"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-[14px] text-[#831B61]"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="7+ characters"
                  className="w-[270px] h-[50px] px-4 py-2  bg-[#EEF4FE] rounded-2xl"
                />
              </div>
              <div>
                <label
                  htmlFor="organization"
                  className="text-[14px] text-[#831B61]"
                >
                  Profession
                </label>
                <input
                  type="text"
                  placeholder="Select"
                  className="w-[270px] h-[50px] px-4 py-2  bg-[#EEF4FE] rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 font-inter text-[14px] text-[#71778F]">
              {/* Checkbox 1 */}
              <div className="flex items-start mb-2">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="w-4 h-4 mt-1 mr-2 accent-[#831B61]"
                />
                <label htmlFor="subscribe" className="leading-[18px] mt-1 ml-1">
                  Subscribe now for updates, early releases, & our newsletter.
                </label>
              </div>

              {/* Checkbox 2 */}
              <div className="flex items-start mt-3 ">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-6 h-6 mt-1 mr-2 accent-[#831B61]"
                />
                <label htmlFor="terms" className="leading-[18px] mt-1 ml-1">
                  Creating an account means you're okay with our{" "}
                  <span className="text-[#831B61] font-semibold cursor-pointer">
                    Terms of Service
                  </span>
                  ,{" "}
                  <span className="text-[#831B61] font-semibold cursor-pointer">
                    Privacy Policy
                  </span>
                  , and our default{" "}
                  <span className="text-[#831B61] font-semibold cursor-pointer">
                    Notification Settings
                  </span>
                  .
                </label>
              </div>
            </div>

            <button className="bg-[#F0C013] w-[272px] h-[53px] mt-5  px-3 py-3 text-center rounded-2xl shadow-md">
              <p className="text-[#8F316F] ">Create Account</p>
            </button>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-5 ">
          <img
            src={Image}
            alt="Bottom-right decorative"
            className="max-w-[327px] h-[220px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
