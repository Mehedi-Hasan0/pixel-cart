import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import UserSetting from "./UserSettings";
import { Separator } from "@/components/ui/separator";
import MobileNavbar from "../navbar/MobileNavbar";
import NavFooter from "../navbar/NavFooter";
import { IoSettingsOutline } from "react-icons/io5";
import ShoppingOptions from "./ShoppingOptions";

export default function Header() {
  return (
    <header className=" sm:bg-[#053379] relative z-50 min-h-svh sm:min-h-max">
      {/* large device nav */}
      <div className="main-container pt-2 md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-8 sm:gap-2 md:gap-3 lg:gap-5 2xl:gap-6 hidden sm:flex sm:flex-col sm:justify-between">
        <div className="w-full flex flex-row items-center justify-between gap-8">
          <Logo logoSrc="/assets/icons/pixel-cart-logo.svg" />
          <Search />
          <div className="flex-between gap-4 lg:gap-5 xl:gap-6 2xl:gap-12">
            <Cart />
            <Separator
              orientation="vertical"
              className="h-7 lg:h-9 xl:h-12 2xl:h-16 bg-gray-500"
            />
            <UserSetting>
              <div>
                <IoSettingsOutline
                  size={48}
                  className="w-5 lg:w-6 xl:w-8 2xl:w-9 text-white rounded-full hover:text-accentLightLime custom-transition cursor-pointer"
                />
              </div>
            </UserSetting>
          </div>
        </div>
        {/* header top ☝️ */}
        {/* shopping navigation options 👇 */}
        <ShoppingOptions />
      </div>
      {/* mobile nav */}
      <div className="sm:hidden fixed left-0 top-0 w-full bg-[#053379] py-3">
        <MobileNavbar />
      </div>
      {/* for mobile navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 border-t border-gray-300 py-2 w-full main-container bg-white">
        <NavFooter />
      </div>
    </header>
  );
}
