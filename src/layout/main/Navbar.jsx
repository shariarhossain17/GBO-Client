import React from "react";
import logo from "../../assets/gbo_logo-removebg-preview.png";

const Navbar = () => {
  return (
    <nav className="px-[5%] w-[100%] bg-primaryBG py-1">
      <div className="">
        <div className="flex items-center">
          <img className="w-14" src={logo} alt="" />
          <div>
            <h1 className="text-white text-[15px] font-[700]">গাবুরা</h1>
            <h1 className="text-white text-[15px] font-[700]">
              রক্তদান সংস্থা
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
