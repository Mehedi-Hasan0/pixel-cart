import ShoppingMenuProductLoader from "@/components/skeletonLoader/ShoppingMenuProductLoader";
import { productsData } from "@/data";
import Image from "next/image";

interface IProductShoppingProps {
  subMenuWidth: number;
}

const ProductShopping: React.FC<IProductShoppingProps> = ({ subMenuWidth }) => {
  const loading = false; // TODO: when data will be fetched from backend then this loading will be based on the data availablity

  return (
    <div
      className="min-h-[320px] bg-white px-8 py-8"
      style={{ width: `${subMenuWidth}px` }}
    >
      {/* ☝️ content should have a fixed width */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 lg:gap-y-0 xl:gap-7 justify-items-center 2xl:max-w-screen-lg 2xl:mx-auto">
        {/* TODO: Here will be a skeleton loading ui */}
        {loading ? (
          <ShoppingMenuProductLoader />
        ) : (
          <>
            {productsData.map((data, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <p className="text-sm font-bold text-primaryText uppercase text-center">
                  {data.label}
                </p>

                {/* TODO: this will be carousel of products */}
                {data?.product.map((product) => (
                  <div
                    key={product._id}
                    className="border rounded-lg px-4 py-3 flex flex-col gap-3 max-w-[200px]"
                  >
                    <Image
                      src={product.images[0].link}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="w-[120px] mx-auto"
                    />

                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-primaryText font-bold">
                        {product.title}
                      </p>

                      <p className="text-xs text-primaryText font-bold">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductShopping;
