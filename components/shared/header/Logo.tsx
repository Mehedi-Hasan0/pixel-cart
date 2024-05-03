import Image from "next/image";
import Link from "next/link";

/**
 * A dynamic Logo component which can be used all over the site.
 * @param {logoSrc} type The link of the logo.
 * @param {textStyle} type The style of the logo name.
 * @returns The proper Logo with name.
 */

type ILogoProps = {
  logoSrc: string;
  textStyle?: string;
};

const Logo: React.FC<ILogoProps> = ({ logoSrc, textStyle = "text-white" }) => {
  return (
    <div>
      {/* logo */}
      <Link href={"/"} className="flex-center gap-1 md:gap-2 2xl:gap-3">
        <Image
          src={logoSrc}
          alt="logo"
          width={120}
          height={30}
          className="w-4 md:w-5 lg:w-8 xl:w-10 2xl:w-12"
        />
        <p
          className={`font-pixel text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium tracking-tight ${textStyle}`}
        >
          Pixel Cart
        </p>
      </Link>
    </div>
  );
};

export default Logo;
