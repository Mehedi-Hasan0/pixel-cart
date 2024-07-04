"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { browsingLinks } from "@/data";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

/**
 * @param {children} type children property is the trigger for the user settings slide.
 * @returns The proper Logo with name.
 */

interface IMobileCategoryMenuProps {
  children: React.ReactNode;
}

const MobileCategoryMenu: React.FC<IMobileCategoryMenuProps> = ({
  children,
}) => {
  // STATE //
  // for active sub menu
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

  // LOGIC //
  const handleActiveMenu = (idx: number) => {
    setActiveSubMenu(idx);
  };

  const handleSheetClose = () => {
    setActiveSubMenu(null);
  };

  return (
    <Sheet
      onOpenChange={(open) => {
        if (!open) handleSheetClose();
      }}
    >
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetDescription>
            {/* menus */}
            <div className=" relative mt-10">
              {/* content */}
              <ul className="grid grid-cols-1 gap-2">
                {browsingLinks &&
                  browsingLinks.map((link, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleActiveMenu(idx)}
                        onMouseEnter={() => handleActiveMenu(idx)}
                        className="w-full"
                      >
                        <div
                          className={`flex items-center justify-between gap-5 bg-white px-4 py-3 ${
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
                        </div>
                      </button>

                      {idx === activeSubMenu && (
                        <div className=" px-3 lg:px-6 pt-6 sm:pb-8 lg:pb-0 flex-1">
                          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
                            {browsingLinks &&
                              browsingLinks[activeSubMenu].slug.map(
                                (slug, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-center gap-3 md:gap-3 lg:gap-5 xl:mx-4"
                                  >
                                    <div className="p-2 lg:p-3 rounded-full bg-gray-100">
                                      <Image
                                        src={slug.icon}
                                        alt={slug.label}
                                        width={40}
                                        height={40}
                                        className="w-7 h-7 md:w-5 md:h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                                      />
                                    </div>
                                    <div className="flex flex-col items-start">
                                      {/* TODO: link should be dynamic & updated */}
                                      <Link
                                        href={"#"}
                                        className="text-xs xl:text-sm font-semibold text-primaryText hover:text-primaryGreen custom-transition "
                                      >
                                        {slug.label}
                                      </Link>
                                      <p className="text-[10px] xl:text-xs text-secondaryText ">
                                        From {slug.minPrice}
                                      </p>
                                    </div>
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileCategoryMenu;
