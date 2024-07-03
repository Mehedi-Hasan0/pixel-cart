import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import ProductShopping from "./ProductShopping";
import BrowsingAllLinks from "./BrowsingAllLinks";
import ShoppingOptionsMenuTitle from "./ShoppingOptionsMenuTitle";
import MenuExtraOptions from "./MenuExtraOptions";

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
    <div className="flex items-center justify-between gap-4">
      {/* left side browsing menu */}
      <NavigationMenu>
        <NavigationMenuList>
          {/* 1st option */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onMouseEnter={() => setHoverMenu(true)}
              onMouseLeave={() => setHoverMenu(false)}
              className="text-primaryText hover:text-primaryGreen h-12 xl:h-16 px-4 md:px-6 flex items-center gap-4"
            >
              {/* menu title/btn */}
              <ShoppingOptionsMenuTitle
                hoverMenu={hoverMenu}
                isDefault={true}
                textLabel="Browse all collection"
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-full">
              {/* content should have a fixed width */}
              <BrowsingAllLinks
                activeSubMenu={activeSubMenu}
                subMenuWidth={subMenuWidth}
                handleDefaultActiveMenu={handleDefaultActiveMenu}
                handleActiveMenu={handleActiveMenu}
              />
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* 2nd option */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              key={1}
              className="text-primaryText hover:text-primaryGreen h-12 xl:h-16 px-4 md:px-6 flex items-center gap-4"
            >
              {/* menu title/btn */}
              <ShoppingOptionsMenuTitle
                hoverMenu={hoverMenu}
                textLabel="Produtcs"
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-full">
              <ProductShopping subMenuWidth={subMenuWidth} />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* right side extra options */}
      <MenuExtraOptions />
    </div>
  );
};

export default ShoppingOptionsNavigation;
