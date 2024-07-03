import { IoIosMenu } from "react-icons/io";
import Logo from "../header/Logo";
import MobileSearchbar from "./MobileSearchbar";
import MobileCategoryMenu from "../header/MobileCategoryMenu";

const MobileNavbar = () => {
  return (
    <div className="flex-center justify-between items-center gap-5 relative main-container">
      <MobileSearchbar />
      {/* logo */}
      <div>
        <Logo logoSrc="/assets/icons/pixel-cart-logo.svg" />
      </div>
      <div>
        {/* menu */}
        <MobileCategoryMenu>
          <IoIosMenu size={24} className="w-7 -mb-2 text-white" />
        </MobileCategoryMenu>
      </div>
    </div>
  );
};

export default MobileNavbar;
