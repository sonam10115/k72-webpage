import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <Link
        className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] flex border-white rounded-full px-5 item-center pt-2"
        t0="/projects"
      >
        PROJECTS
      </Link>
      <Link className="border-3 flex border-white rounded-full px-5 item-center pt-2 ">
        AGENCE
      </Link>
    </div>
  );
};

export default HomeBottomText;
