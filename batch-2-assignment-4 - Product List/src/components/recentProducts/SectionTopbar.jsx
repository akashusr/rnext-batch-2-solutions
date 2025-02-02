/* eslint-disable react/prop-types */
// dependencies
import { useEffect, useRef, useState } from "react";
import CaretDownIcon from "../svgIcons/CaretDownIcon";
import CaretUpIcon from "../svgIcons/CaretUpIcon";
import Cart from "./Cart";
import CategoryFilterModal from "./CategoryFilterModal";
import SearchBar from "./SearchBar";
import SortModal from "./SortModal";

const SectionTopbar = ({ onSearch, searchTerm, isAscSort, onSort }) => {
  // filter modal state
  const [showSortFilterModal, setShowSortFilterModal] = useState(false);
  const [showCategoryFilterModal, setShowCategoryFilterModal] = useState(false);

  // modal node refs
  const sortFilterModalRef = useRef(null);
  const categoryFilterModalRef = useRef(null);

  // Handle outside click to close modals
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".toggle-modal-button") &&
        showSortFilterModal &&
        sortFilterModalRef.current &&
        !sortFilterModalRef.current.contains(event.target)
      ) {
        setShowSortFilterModal(false);
      }

      if (
        !event.target.closest(".toggle-modal-button") &&
        showCategoryFilterModal &&
        categoryFilterModalRef.current &&
        !categoryFilterModalRef.current.contains(event.target)
      ) {
        setShowCategoryFilterModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSortFilterModal, showCategoryFilterModal]);

  // Toggle modal visibility
  const handleFilterModalToggle = (filter) => {
    if (filter === "sort") {
      setShowCategoryFilterModal(false);
      setShowSortFilterModal((prev) => !prev);
    } else if (filter === "category-filter") {
      setShowSortFilterModal(false);
      setShowCategoryFilterModal((prev) => !prev);
    }
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Sort Filter */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all toggle-modal-button"
              onClick={() => handleFilterModalToggle("sort")}
            >
              Sort
              {showSortFilterModal ? <CaretUpIcon /> : <CaretDownIcon />}
            </button>
            {showSortFilterModal && (
              <SortModal
                ref={sortFilterModalRef}
                onHideModal={() => setShowSortFilterModal(false)}
                isAscSort={isAscSort}
                onSort={onSort}
              />
            )}
          </div>

          {/* Category filter */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all toggle-modal-button"
              onClick={() => handleFilterModalToggle("category-filter")}
            >
              Filter
              {showCategoryFilterModal ? <CaretUpIcon /> : <CaretDownIcon />}
            </button>

            <CategoryFilterModal
              ref={categoryFilterModalRef}
              onHideModal={() => setShowCategoryFilterModal(false)}
              onHideClass={showCategoryFilterModal ? "" : "hidden"}
            />
          </div>
        </div>

        {/* Search & Cart */}
        <div className="flex gap-2 items-center">
          <SearchBar onSearch={onSearch} searchTerm={searchTerm} />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default SectionTopbar;
