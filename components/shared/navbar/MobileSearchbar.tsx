"use client";

import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { searchBar } from "./anim";
import { RxCross2 } from "react-icons/rx";
import useOutsideClick from "@/hooks/useOutsideClick";
import { hotSearch } from "@/constants";

const MobileSearchbar = () => {
  // STATE //
  const [showSearchbar, setShowSearchbar] = useState(false);
  // REF //
  const navRef = useRef<HTMLDivElement>(null);

  // search bar closing by outside click //
  useOutsideClick(navRef, () => {
    if (showSearchbar) {
      setShowSearchbar(false);
    }
  });

  return (
    <div ref={navRef} className="">
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
        className={`bg-white w-full fixed shadow top-12 left-0`}
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
        <div className="px-6 py-5 w-full flex flex-col gap-3">
          <p className="text-xs font-bold text-secondaryText">Hot Searches:</p>
          <div className="flex-center gap-4 w-full hide-x-scrollbar">
            {hotSearch.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-md bg-[#f5f5f7] hover:bg-primaryGreen custom-transition"
              >
                <p className="text-[11px] font-semibold text-primaryText hover:text-white custom-transition">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileSearchbar;
