// dependencies
import SearchIcon from "../svgIcons/SearchIcon";

const SearchBar = ({ onSearch, searchTerm }) => {
  return (
    <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
      <SearchIcon />
      <input
        className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
        placeholder="Find anything..."
        aria-label="Search components"
        role="combobox"
        type="search"
        aria-expanded="false"
        aria-autocomplete="list"
        style={{ caretColor: "rgb(107, 114, 128)" }}
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
