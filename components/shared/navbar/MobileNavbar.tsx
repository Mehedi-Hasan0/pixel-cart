import { MdHome } from "react-icons/md";

const MobileNavbar = () => {
  return (
    <div className="flex items-center gap-6 justify-between">
      {/* home */}
      <MdHome size={28} className="text-[#535353]" />
    </div>
  );
};

export default MobileNavbar;
