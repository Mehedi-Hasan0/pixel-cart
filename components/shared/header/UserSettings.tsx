import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from "./Logo";
import { Separator } from "@/components/ui/separator";
import { customerAccountLinks, customerCareLink } from "@/constants";
import Link from "next/link";

export default function UserSetting() {
  return (
    <Sheet>
      <SheetTrigger>
        <div>
          <IoSettingsOutline
            size={48}
            className="w-5 lg:w-6 xl:w-8 2xl:w-9 text-white rounded-full hover:text-accentLightLime custom-transition cursor-pointer"
          />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo
              logoSrc="/assets/icons/pixel-cart-logo-bold.svg"
              textStyle="text-primaryText"
            />
          </SheetTitle>
          <div className="py-3 2xl:pt-8 2xl:pb-6">
            <Separator orientation="vertical" className="w-full h-[1px]" />
          </div>
          <SheetDescription>
            <div className="flex flex-col 2xl:gap-3">
              {/* customer links */}
              <div>
                <h3 className="uppercase text-grayText font-bold text-[10px] lg:text-xs 2xl:text-sm mb-3 lg:mb-4 2xl:mb-6">
                  Customer Account
                </h3>
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
                  {customerAccountLinks.map((link, idx) => (
                    // TODO: Change the link with actual route link
                    <Link
                      href={link.link}
                      key={idx}
                      className="text-[#222222] font-semibold sm:text-xs md:text-sm lg:text-base hover:text-primaryGreen custom-transition w-fit"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              {/* vertical line */}
              <div className="py-3 lg:py-5 2xl:py-6">
                <Separator orientation="vertical" className="w-full h-[1px]" />
              </div>
              {/* customer care */}
              <div>
                <h3 className="uppercase text-grayText font-bold text-[10px] lg:text-xs mb-4 2xl:mb-6">
                  Customer Care
                </h3>
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
                  {customerCareLink.map((link, idx) => (
                    // TODO: Change the link with actual route link
                    <Link
                      href={link.link}
                      key={idx}
                      className="text-secondaryText sm:text-xs md:text-sm lg:text-base hover:text-primaryGreen custom-transition w-fit"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
