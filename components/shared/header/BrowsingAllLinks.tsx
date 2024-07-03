import { motion } from "framer-motion";
import { widthVariant } from "./anim";
import { browsingLinks } from "@/data";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

interface IBrowsingAllLinksProps {
  activeSubMenu: number;
  subMenuWidth: number;
  handleDefaultActiveMenu: () => void;
  handleActiveMenu: (idx: number) => void;
}

const BrowsingAllLinks: React.FC<IBrowsingAllLinksProps> = ({
  activeSubMenu,
  subMenuWidth,
  handleDefaultActiveMenu,
  handleActiveMenu,
}) => {
  return (
    <>
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
                  className="w-[240px] bg-white"
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
        <div className=" px-3 lg:px-6 pt-12 sm:pb-8 lg:pb-0 flex-1 max-h-[380px] overflow-y-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
            {browsingLinks &&
              browsingLinks[activeSubMenu].slug.map((slug, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 md:gap-3 lg:gap-5 xl:mx-4"
                >
                  <div className="p-2 lg:p-3 rounded-full bg-gray-100">
                    <Image
                      src={slug.icon}
                      alt={slug.label}
                      width={40}
                      height={40}
                      className="w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
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
    </>
  );
};

export default BrowsingAllLinks;
