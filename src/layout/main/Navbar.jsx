import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdLightMode, MdOutlineClose, MdOutlineDarkMode } from "react-icons/md";
import logo from "../../assets/gbo_logo-removebg-preview.png";
import CustomNavlink from "../../components/shared/CustomNavlink";
import Theme from "../../customhook/Theme";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = Theme();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`px-[5%] w-[100%] py-1 border-b dark:bg-primaryBG`}>
      <div className="">
        <div className="md:flex justify-between items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                <img className="w-12 md:w-14" src={logo} alt="" />
              </div>
              <div>
                <h1 className="text-[#171C2A] text-[15px] font-[700] leading-[13px] dark:text-white">
                  গাবুরা
                </h1>
                <h1 className="text-[#171C2A] text-[15px] font-[700] dark:text-white">
                  রক্তদান সংস্থা
                </h1>
              </div>
            </div>
            <div>
              {!toggle ? (
                <FiMenu className="md:hidden" onClick={handleToggle} />
              ) : (
                <MdOutlineClose
                  className="md:hidden"
                  onClick={() => setToggle(false)}
                >
                  x
                </MdOutlineClose>
              )}
            </div>
          </div>
          <div
            className={`md:flex justify-between gap-8 ${
              !toggle ? "hidden" : null
            }`}
          >
            <ul className="md:flex items-center gap-6">
              <li className="text-textColor text-[14px] font-[500] mt-2 md:mt-0">
                <CustomNavlink to="/">হোম</CustomNavlink>
              </li>
              <li className="text-textColor text-[14px]  mt-2 md:mt-0">
                <CustomNavlink to="/about">আমাদের সম্পর্কে</CustomNavlink>
              </li>
              <li className="text-textColor text-[14px]  mt-2 md:mt-0">
                <CustomNavlink to="/event">ইভেন্ট</CustomNavlink>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              {theme === "dark" ? (
                <MdLightMode
                  onClick={() => setTheme("light")}
                  className="text-white h-5 w-5"
                >
                  Light
                </MdLightMode>
              ) : (
                <MdOutlineDarkMode
                  onClick={() => setTheme("dark")}
                  className=" h-5 w-5"
                ></MdOutlineDarkMode>
              )}
              <button className="bg-btnColor text-white px-2  py-1 rounded-full text-[14px] mt-4 md:mt-0 w-full md:w-14 dark:bg-darkBgBtn">
                লগইন
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
