import { HiOutlineMenuAlt2 } from "react-icons/hi";

interface IShoppingOptionsMenuTitleProps {
  // dependencies
  hoverMenu: boolean;
  //   props
  isDefault?: boolean;
  textLabel?: string;
}

const ShoppingOptionsMenuTitle: React.FC<IShoppingOptionsMenuTitleProps> = ({
  hoverMenu,
  isDefault = false,
  textLabel,
}) => {
  return (
    <>
      {isDefault && (
        <HiOutlineMenuAlt2
          size={20}
          className={`w-4 xl:w-5 transition-all duration-200 ${
            hoverMenu ? "text-primaryGreen" : "text-primaryText"
          }`}
        />
      )}
      <span className="relative -right-1 2xl:-right-2 uppercase font-semibold text-[10px] xl:text-sm">
        {textLabel}
      </span>
    </>
  );
};

export default ShoppingOptionsMenuTitle;
