interface IButtonProps {
  btnText?: string;
  isPrimary?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  btnText = "Shop now",
  isPrimary = false,
}) => {
  return (
    <div className="">
      <button
        className={`uppercase font-bold text-xs px-7 py-4 rounded custom-transition   transition duration-300 ${
          isPrimary
            ? "bg-white hover:bg-primaryGreen text-primaryText hover:text-white"
            : "bg-primaryGreen hover:bg-[#0271c2] text-white"
        }`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
