import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { browsingLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { widthVariant } from "./anim";
import { useState } from "react";

interface IShoppingOptionsNavigation {
  subMenuWidth: number;
}

const ShoppingOptionsNavigation: React.FC<IShoppingOptionsNavigation> = ({
  subMenuWidth,
}) => {
  // STATE //

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
    <NavigationMenu>
      <NavigationMenuList>
        {/* TODO: make home item + product item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-primaryText hover:text-primaryGreen h-12 xl:h-16 px-6 flex items-center gap-4">
            <HiOutlineMenuAlt2
              size={20}
              className="w-4 xl:w-5 group-hover:text-primaryGreen transition-all duration-200"
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
              {/* menus */}
              <div className="border-r border-gray-200 px-3 py-4 relative">
                {/* animated div element */}
                <motion.div
                  variants={widthVariant}
                  initial="initial"
                  animate="enter"
                  className="h-[2px] bg-accentLightLime absolute left-0 top-0"
                />
                {/* content */}
                <ul className="grid grid-cols-1 gap-2">
                  {browsingLinks &&
                    browsingLinks.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleActiveMenu(idx)}
                        onMouseEnter={() => handleActiveMenu(idx)}
                        className="w-[220px] bg-white"
                      >
                        <li
                          className={`flex items-center justify-between gap-5 px-4 py-3 bg-white ${
                            activeSubMenu === idx && "rounded-full shadow-md"
                          }`}
                        >
                          <p
                            className={`custom-transition font-semibold ${
                              activeSubMenu === idx && "text-primaryGreen "
                            }`}
                          >
                            {link.label}
                          </p>
                          <MdKeyboardArrowRight
                            size={20}
                            className={`custom-transition ${
                              activeSubMenu === idx
                                ? "text-primaryGreen "
                                : "text-primaryText "
                            }`}
                          />
                        </li>
                      </button>
                    ))}
                </ul>
              </div>
              {/* options */}
              <div className=" px-6 pt-12 flex-1">
                <ul className="grid grid-cols-3 gap-y-6">
                  {browsingLinks &&
                    browsingLinks[activeSubMenu].slug.map((slug, idx) => (
                      <li key={idx} className="flex items-center gap-5 xl:mx-4">
                        <div className="p-3 rounded-full bg-gray-100">
                          <Image
                            src={slug.icon}
                            alt={slug.label}
                            width={40}
                            height={40}
                            className="w-7 h-7 xl:w-8 xl:h-8"
                          />
                        </div>
                        <div>
                          {/* TODO: link should be dynamic & updated */}
                          <Link
                            href={"#"}
                            className="text-xs xl:text-sm font-semibold text-primaryText hover:text-primaryGreen custom-transition"
                          >
                            {slug.label}
                          </Link>
                          <p className="text-[10px] xl:text-xs text-secondaryText">
                            From {slug.minPrice}
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ShoppingOptionsNavigation;
