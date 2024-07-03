import { FaTruckMoving } from "react-icons/fa";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const MenuExtraOptions = () => {
  return (
    <div className="flex items-center gap-6 md:gap-8 mr-5 md:mr-7">
      <div className="flex items-center gap-1.5">
        <FaTruckMoving className="w-4 h-4 text-primaryGreen" />
        <Link
          href={"#"}
          className="text-[10px] lg:text-xs text-primaryText hover:text-primaryGreen custom-transition font-medium"
        >
          Track Your Order
        </Link>
      </div>
      <div className="flex items-center gap-1.5">
        <FaLocationDot className="w-4 h-4 text-primaryGreen" />
        <Link
          href={"#"}
          className="text-[10px] lg:text-xs text-primaryText hover:text-primaryGreen custom-transition font-medium"
        >
          Store Location
        </Link>
      </div>
    </div>
  );
};

export default MenuExtraOptions;
