import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <div className="flex-center gap-4 lg:gap-6 xl:gap-7 2xl:gap-10">
      {/* wishlist */}
      <div className="relative group">
        <FaHeart
          size={48}
          className="w-4 lg:w-5 xl:w-7 2xl:w-8 text-white rounded-full group-hover:text-accentLightLime custom-transition cursor-pointer"
        />
        {/* number of product inside the wishlist */}
        <div className="absolute top-[6px] -right-1 lg:-top-[2px] lg:-right-[10px] xl:-top-2 xl:-right-3 2xl:-top-3 2xl:-right-3 border-2 border-[#053379] rounded-full">
          <p className="bg-primaryGreen w-3 h-3 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-full text-white flex-center justify-center text-[8px] lg:text-xs 2xl:text-sm">
            3
          </p>
        </div>
      </div>
      {/* cart */}
      <div className="relative group">
        <IoCartOutline
          size={48}
          className="w-5 lg:w-6 xl:w-8 2xl:w-9 text-white rounded-full group-hover:text-accentLightLime custom-transition cursor-pointer"
        />
        {/* number of product inside the wishlist */}
        <div className="absolute top-[6px] -right-1 lg:-top-[2px] lg:-right-[10px] xl:-top-2 xl:-right-3 2xl:-top-3 2xl:-right-3 border-2 border-[#053379] rounded-full">
          <p className="bg-primaryGreen w-3 h-3 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-full text-white flex-center justify-center text-[8px] lg:text-xs 2xl:text-sm">
            3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
