import React, { useState } from "react";
import logo from "../../assets/gbo_logo-removebg-preview.png";
import CustomNavlink from "../../components/shared/CustomNavlink";

const Navbar = () => {
    const [toggle,setToggle] = useState(false);

    const handleToggle = ()=> {
        setToggle(!toggle)
    }

    console.log(toggle);
  return (
    <nav className="px-[5%] w-[100%]  py-1 border-b">
      <div className="md:flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-14" src={logo} alt="" />
          <div>
            <h1 className="text-[#171C2A] text-[15px] font-[700] leading-[13px]">
              গাবুরা
            </h1>
            <h1 className="text-[#171C2A] text-[15px] font-[700] ">
              রক্তদান সংস্থা
            </h1>
            <button onClick={handleToggle} className="btn">MENu</button>
          </div>
        </div>
        <div className={`md:flex justify-between gap-8 ${toggle ? "hidden":null}`}>
          <ul className="md:flex items-center gap-6">
            <li className="text-textColor text-[14px] font-[500]">
              <CustomNavlink to="/">হোম</CustomNavlink>
            </li>
            <li className="text-textColor text-[14px]">
              <CustomNavlink to="/about">আমাদের সম্পর্কে</CustomNavlink>
            </li>
            <li className="text-textColor text-[14px]">
              <CustomNavlink to="/event">ইভেন্ট</CustomNavlink>
            </li>
          </ul>
          <button className="bg-btnColor text-white px-2  py-1 rounded-full text-[14px]">
            লগইন
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
