/* eslint-disable react/prop-types */
// dependencies
import { forwardRef } from "react";

const SortModal = forwardRef(({ isAscSort, onSort, onHideModal }, ref) => {
  // handle sort
  const handleSortSelection = (type) => {
    // send sort data to parent
    onSort(type);
    // hide sorting modal
    onHideModal();
  };
  
  return (
    <div
      className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      ref={ref}
    >
      <div className="py-0" role="none">
        <span
          className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-md transition-all ${
            isAscSort ? "sort-active" : ""
          }`}
          onClick={() => handleSortSelection("asc")}
        >
          Low to High
        </span>
        <span
          className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-b-md transition-all ${
            !isAscSort ? "sort-active" : ""
          }`}
          onClick={() => handleSortSelection("desc")}
        >
          High to Low
        </span>
      </div>
    </div>
  );
});

// Set a display name for the component to avoid linter warnings
SortModal.displayName = "SortModal";

export default SortModal;
