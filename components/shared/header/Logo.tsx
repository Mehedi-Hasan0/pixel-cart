import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex-center gap-3">
      {/* logo */}
      <Link href={"/"}>
        <Image
          src={"/assets/icons/pixel-cart-logo.svg"}
          alt="logo"
          width={120}
          height={30}
          className="w-12"
        />
      </Link>
      <p className="font-pixel text-white text-5xl font-medium tracking-tight">
        Pixel Cart
      </p>
    </div>
  );
}
