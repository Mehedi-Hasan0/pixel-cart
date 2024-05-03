import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <header className=" bg-[#053379]">
      <div className="main-container py-3 2xl:py-8 flex-between gap-8">
        <Logo />
        <Search />
      </div>
    </header>
  );
}
