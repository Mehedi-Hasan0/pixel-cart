"use client";

import { useEffect, useRef, useState } from "react";
import ShoppingOptionsNavigation from "./ShoppingOptionsNavigation";

export default function ShoppingOptions() {
  // STATE //
  // for sub menu content width
  const [subMenuWidth, setSubMenuWidth] = useState<number>(0);
  // REF //
  const browsingOptsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function optWidth() {
      if (browsingOptsRef.current) {
        setSubMenuWidth(browsingOptsRef.current.clientWidth);
      }
    }

    optWidth();

    window.addEventListener("resize", optWidth);

    return () => {
      window.removeEventListener("resize", optWidth);
    };
  }, []);

  return (
    <div
      ref={browsingOptsRef}
      className="w-full bg-white border-b border-slate-300 shadow-md rounded-tl-md rounded-tr-md"
    >
      <ShoppingOptionsNavigation subMenuWidth={subMenuWidth} />
    </div>
  );
}
