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
    <div className="flex-center gap-3">
      {/* logo */}
      <Link href={"/"}>
        <Image
          src={logoSrc}
          alt="logo"
          width={120}
          height={30}
          className="w-12"
        />
      </Link>
      <p
        className={`font-pixel text-5xl font-medium tracking-tight ${textStyle}`}
      >
        Pixel Cart
      </p>
    </div>
  );
};

export default Logo;
