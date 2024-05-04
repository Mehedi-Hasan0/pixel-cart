import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { MdAccountCircle, MdHome } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import UserSetting from "../header/UserSettings";

export default function NavFooter() {
  return (
    <div className="flex items-center gap-6 justify-between">
      {/* home */}
      <Link href={"/"} className="flex flex-col items-center">
        <MdHome size={28} className="text-[#7e7e7e] w-7" />
        <p className="text-xs">Home</p>
      </Link>
      {/* messages */}
      <Link href={"/"} className="flex flex-col items-center">
        <RiMessage2Fill size={28} className="text-[#7e7e7e] w-7" />
        <p className="text-xs">Messages</p>
      </Link>
      {/* cart */}
      <div className="relative">
        <div className="flex flex-col items-center">
          <IoMdCart
            size={30}
            className="w-[30px] text-[#7e7e7e] rounded-full hover:text-primaryGreen custom-transition cursor-pointer"
          />
          <p className="text-xs">Cart</p>
        </div>
        {/* number of product inside the wishlist */}
        <div className="absolute -top-[4px] -right-2 border-2 border-white rounded-full">
          <p className="bg-primaryGreen w-4 h-4 rounded-full text-white flex-center justify-center text-xs">
            3
          </p>
        </div>
      </div>
      {/* account */}
      <UserSetting>
        <div className="flex flex-col items-center">
          <MdAccountCircle size={28} className="text-[#7e7e7e] w-7" />
          <p className="text-xs">Account</p>
        </div>
      </UserSetting>
    </div>
  );
}
