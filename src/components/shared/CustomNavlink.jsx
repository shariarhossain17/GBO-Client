import React from "react";
import { Link, useLocation } from "react-router-dom";

const CustomNavlink = ({ children, to }) => {
  const location = useLocation();
  const match = location.pathname === to;

  return (
    <div className={match ? "bg-btnColor text-white px-2 py-1 rounded-md inline-block" : ""}>
      {/* {match ?  : ""} */}
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default CustomNavlink;
