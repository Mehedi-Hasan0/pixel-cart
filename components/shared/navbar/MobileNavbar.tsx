import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import Logo from "../header/Logo";
import { FaHeart } from "react-icons/fa";

const MobileNavbar = () => {
  return (
    <div className="flex-center justify-between gap-5">
      {/* menu btn */}
      <div className="flex-center gap-3">
        {/* search icon */}
        <CiSearch size={24} className="w-6 cursor-pointer" color="#ffffff" />
      </div>
      {/* logo */}
      <div className="">
        <Logo logoSrc="/assets/icons/pixel-cart-logo.svg" />
      </div>
      {/* menu */}
      <IoIosMenu size={24} className="w-6 text-white" />
    </div>
  );
};

export default MobileNavbar;
