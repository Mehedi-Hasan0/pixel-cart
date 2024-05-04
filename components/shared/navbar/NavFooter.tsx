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
      <Link href={"/"} className="flex flex-col items-center">
        <IoMdCart size={28} className="text-[#7e7e7e] w-7" />
        <p className="text-xs">Cart</p>
      </Link>
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
