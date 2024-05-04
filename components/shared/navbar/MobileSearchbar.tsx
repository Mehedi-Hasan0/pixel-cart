"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { searchBar } from "./anim";
import { RxCross2 } from "react-icons/rx";

const MobileSearchbar = () => {
  // STATE //
  const [showSearchbar, setShowSearchbar] = useState(false);
  return (
    <div className="">
      {/* search icon */}
      <div onClick={() => setShowSearchbar((prev) => !prev)}>
        {showSearchbar ? (
          <RxCross2 size={24} className="w-6 cursor-pointer" color="#ffffff" />
        ) : (
          <CiSearch size={24} className="w-6 cursor-pointer" color="#ffffff" />
        )}
      </div>

      <motion.div
        variants={searchBar}
        initial="initial"
        animate={showSearchbar ? "enter" : "exit"}
        className={`bg-white w-full fixed shadow top-12 left-0 h-44`}
      >
        {/* search input */}
        <input
          type="search"
          name=""
          id=""
          placeholder="Enter your keywords"
          className="w-full py-5 bg-white text-center text-sm border-b border-slate-300 placeholder:text-[10px] placeholder:text-center placeholder:uppercase placeholder:font-bold outline-none px-6"
        />

        {/* recommendation */}
      </motion.div>
    </div>
  );
};

export default MobileSearchbar;
