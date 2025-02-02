// dependencies
import { useEffect, useState } from "react";
import useDebounceValue from "../../hooks/useDebounceValue";

import useToast from "../../hooks/useToast";
import { useProductsContext } from "../../providers/ProductsProvider";
import SectionTitle from "../common/SectionTitle";
import ProductList from "./ProductList";
import SectionTopbar from "./SectionTopbar";

const RecentProductSection = () => {
  // products context
  const { products, isLoading, error } = useProductsContext();

  // filtered Product calculated state from product context
  let filteredProducts = products;

  // toast message hook init
  const { showError } = useToast();

  useEffect(() => {
    if (error) showError(error);
  }, [error]);

  // search filter state
  const [searchTerm, setSearchTerm] = useState("");
  // sort by price state
  const [isAscSort, setIsAscSort] = useState(true);

  // handle search input change
  const handleSearchInputChange = (input) => {
    setSearchTerm(input);
  };

  // handle sort
  const handleSortSelection = (type) => {
    if ("asc" === type) {
      setIsAscSort(true);
    } else {
      setIsAscSort(false);
    }
  };

  // debounce the search term with a 500ms delay
  const debouncedSearchTerm = useDebounceValue(searchTerm, 500);

  // Search filter and sort products based on search term and sorting order
  filteredProducts = filteredProducts
    ?.filter((product) =>
      product?.title
        ?.toLowerCase()
        .includes(debouncedSearchTerm.trim().toLowerCase())
    )
    ?.sort((a, b) => (isAscSort ? a.price - b.price : b.price - a.price));

  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <SectionTitle
          title="New Arrivals"
          subTitle="Thoughtfully designed objects for the workspace, home, and travel."
        />
        <SectionTopbar
          searchTerm={searchTerm}
          onSearch={handleSearchInputChange}
          isAscSort={isAscSort}
          onSort={handleSortSelection}
        />
        <ProductList products={filteredProducts} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default RecentProductSection;
