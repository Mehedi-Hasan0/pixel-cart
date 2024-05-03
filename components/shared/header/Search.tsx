import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="text-white">
      <label
        htmlFor="search"
        className="flex-center rounded-full bg-white px-4 py-3"
      >
        <CiSearch
          size={48}
          className="2xl:w-8 mr-2 cursor-pointer"
          color="#053379"
        />

        <input
          type="search"
          name=""
          id=""
          className="px-4 py-3 text-primaryText 2xl:text-lg 2xl:min-w-[500px] border-none outline-none 2xl:placeholder:text-lg"
          placeholder="Enter your keywords..."
        />
      </label>
    </div>
  );
};

export default Search;
