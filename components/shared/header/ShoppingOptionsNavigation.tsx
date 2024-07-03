import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import ProductShopping from "./ProductShopping";
import BrowsingAllLinks from "./BrowsingAllLinks";

interface IShoppingOptionsNavigation {
  subMenuWidth: number;
}

const ShoppingOptionsNavigation: React.FC<IShoppingOptionsNavigation> = ({
  subMenuWidth,
}) => {
  // STATE //
  const [hoverMenu, setHoverMenu] = useState<boolean>(false);
  // for active sub menu
  const [activeSubMenu, setActiveSubMenu] = useState<number>(0);

  // LOGIC //
  const handleActiveMenu = (idx: number) => {
    setActiveSubMenu(idx);
  };

  // Because we are giving an exit animation of 300 ms for the navigation content that's why we are setting the index to 0 using setTimout with 300ms delay.
  const handleDefaultActiveMenu = () => {
    setTimeout(() => {
      setActiveSubMenu(0);
    }, 300);
  };

  return (
    <div className="flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          {/* TODO: make home item + product item */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onMouseEnter={() => setHoverMenu(true)}
              onMouseLeave={() => setHoverMenu(false)}
              className="text-primaryText hover:text-primaryGreen h-12 xl:h-16 px-6 flex items-center gap-4"
            >
              <HiOutlineMenuAlt2
                size={20}
                className={`w-4 xl:w-5 transition-all duration-200 ${
                  hoverMenu ? "text-primaryGreen" : "text-primaryText"
                }`}
              />
              <span className="relative -right-1 2xl:-right-2 uppercase font-semibold text-[10px] xl:text-sm">
                Browse all collection
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-full">
              {/* content should have a fixed width */}
              <div
                onMouseLeave={handleDefaultActiveMenu}
                className="min-h-[380px] flex gap-4 xl:gap-7 bg-white"
                style={{ width: `${subMenuWidth}px` }}
              >
                <BrowsingAllLinks
                  activeSubMenu={activeSubMenu}
                  handleActiveMenu={handleActiveMenu}
                />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* TODO: make home item + product item */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              key={1}
              className="text-primaryText hover:text-primaryGreen h-12 xl:h-16 px-6 flex items-center gap-4"
            >
              <span className="relative -right-1 2xl:-right-2 uppercase font-semibold text-[10px] xl:text-sm">
                Products
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-full">
              {/* content should have a fixed width */}
              <div
                className="min-h-[320px] bg-white px-8 py-8"
                style={{ width: `${subMenuWidth}px` }}
              >
                <ProductShopping />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default ShoppingOptionsNavigation;
