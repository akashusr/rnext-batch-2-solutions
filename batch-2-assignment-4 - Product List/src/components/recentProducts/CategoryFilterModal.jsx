/* eslint-disable react/prop-types */
// dependencies
import { forwardRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useProductsContext } from "../../providers/ProductsProvider";

const CategoryFilterModal = forwardRef(({ onHideModal, onHideClass }, ref) => {
  // select state
  const [selectedCategory, setSelectedCategory] = useState(null);

  // product context
  const { productCategories, setProductFetchUrl } = useProductsContext();

  // debounced product request
  const handleProductFetchRequest = useDebounce((url) => {
    setProductFetchUrl(url);
  }, 200);

  // handle category select
  const handleCategorySelect = (cat) => {
    if (cat === selectedCategory) {
      // if select the same category which was already selected, then remove and fetch all product and also hide the modal
      setSelectedCategory(null);
      handleProductFetchRequest("https://fakestoreapi.com/products");

      // hide modal
      onHideModal();
    } else {
      setSelectedCategory(cat);
      handleProductFetchRequest(
        `https://fakestoreapi.com/products/category/${cat}`
      );

      // hide modal
      onHideModal();
    }
  };

  return (
    <div
      className={`absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${onHideClass}`}
      role="menu"
      ref={ref}
    >
      <div className="py-1" role="none">
        {productCategories?.map((category) => (
          <label
            key={category}
            className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4"
              checked={selectedCategory === category}
              onChange={() => handleCategorySelect(category)}
            />
            <span className="ml-2 capitalize">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
});

// Set a display name for the component to avoid linter warnings
CategoryFilterModal.displayName = "CategoryFilterModal";

export default CategoryFilterModal;
