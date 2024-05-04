import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import Logo from "../header/Logo";
import MobileSearchbar from "./MobileSearchbar";

const MobileNavbar = () => {
  return (
    <div className="flex-center justify-between gap-5 relative main-container">
      <MobileSearchbar />
      {/* logo */}
      <div>
        <Logo logoSrc="/assets/icons/pixel-cart-logo.svg" />
      </div>
      <div>
        {/* menu */}
        <IoIosMenu size={24} className="w-6 text-white" />
      </div>
    </div>
  );
};

export default MobileNavbar;
