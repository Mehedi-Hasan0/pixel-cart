import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <div className="flex-center gap-10">
      {/* wishlist */}
      <div className="relative group">
        <FaHeart
          size={48}
          className="2xl:w-8 text-white rounded-full group-hover:text-accentLightLime custom-transition cursor-pointer"
        />
        {/* number of product inside the wishlist */}
        <div className="absolute -top-3 -right-3 border-2 border-[#053379] rounded-full">
          <p className="bg-primaryGreen w-7 h-7 rounded-full text-white flex-center justify-center text-sm">
            3
          </p>
        </div>
      </div>
      {/* cart */}
      <div className="relative group">
        <IoCartOutline
          size={48}
          className="2xl:w-9 text-white rounded-full group-hover:text-accentLightLime custom-transition cursor-pointer"
        />
        {/* number of product inside the wishlist */}
        <div className="absolute -top-3 -right-3 border-2 border-[#053379] rounded-full">
          <p className="bg-primaryGreen w-7 h-7 rounded-full text-white flex-center justify-center text-sm">
            3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
