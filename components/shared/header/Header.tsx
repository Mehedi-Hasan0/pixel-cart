import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import UserSetting from "./UserSettings";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className=" bg-[#053379]">
      <div className="main-container py-3 2xl:py-8 flex-between gap-8">
        <Logo logoSrc="/assets/icons/pixel-cart-logo.svg" />
        <Search />
        <div className="flex-between gap-12">
          <Cart />
          <Separator orientation="vertical" className="h-16 bg-gray-500" />
          <UserSetting />
        </div>
      </div>
    </header>
  );
}
