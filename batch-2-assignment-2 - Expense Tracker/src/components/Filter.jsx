import { useState } from "react";
import FilterIcon from "./svg/FilterIcon";

const Filter = ({ options, onFilterChange, selectedFilter }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      onFilterChange([...selectedFilter, value.toLowerCase()]);
    } else {
      const updatedFilter = selectedFilter.filter(
        (filter) => filter !== value.toLowerCase()
      );
      onFilterChange(updatedFilter);
    }
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleFilterOpen}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <FilterIcon />
        </button>
      </div>

      {isFilterOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <label
                key={option}
                className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  onChange={handleFilterChange}
                  value={option}
                  checked={selectedFilter.includes(option.toLowerCase())}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                  id="filter-option-1"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
