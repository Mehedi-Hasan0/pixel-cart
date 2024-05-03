import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import UserSetting from "./UserSettings";
import { Separator } from "@/components/ui/separator";
import MobileNavbar from "../navbar/MobileNavbar";

export default function Header() {
  return (
    <header className=" sm:bg-[#053379]">
      {/* large device nav */}
      <div className="main-container py-2 md:py-4 lg:py-5 xl:py-6 2xl:py-8 gap-8 hidden sm:flex sm:flex-row sm:items-center sm:justify-between">
        <Logo logoSrc="/assets/icons/pixel-cart-logo.svg" />
        <Search />
        <div className="flex-between gap-4 lg:gap-5 xl:gap-6 2xl:gap-12">
          <Cart />
          <Separator
            orientation="vertical"
            className="h-7 lg:h-9 xl:h-12 2xl:h-16 bg-gray-500"
          />
          <UserSetting />
        </div>
      </div>
      {/* mobile nav */}
      <div className="absolute bottom-0 left-0 z-50 py-3 main-container sm:hidden">
        <MobileNavbar />
      </div>
    </header>
  );
}
