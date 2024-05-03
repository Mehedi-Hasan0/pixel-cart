import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="text-white">
      <label
        htmlFor="search"
        className="flex-center rounded-full bg-white px-3 md:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3"
      >
        <CiSearch
          size={32}
          className="w-3 md:w-4 lg:w-5 2xl:w-6 mr-2 cursor-pointer"
          color="#053379"
        />

        <input
          type="search"
          name=""
          id=""
          className="px-4 lg:py-2 xl:py-1 text-primaryText 2xl:text-lg w-[180px] md:min-w-[220px] lg:min-w-[280px] xl:min-w-[380px] 2xl:min-w-[500px] border-none outline-none placeholder:text-xs xl:placeholder:text-sm 2xl:placeholder:text-base"
          placeholder="Enter your keywords..."
        />
      </label>
    </div>
  );
};

export default Search;
