/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// dependencies
import { useContext, useState } from "react";
import { ProductsContext } from "../contexts";
import useData from "../hooks/useData";

const ProductsProvider = ({ children }) => {
  // product fetch url state
  const [productFetchUrl, setProductFetchUrl] = useState(
    "https://fakestoreapi.com/products"
  );

  // getting products data using the "useData" custom hook
  const { data: products, error, isLoading } = useData(productFetchUrl);

  // fetch productCategories
  const { data: productCategories } = useData(
    "https://fakestoreapi.com/products/categories"
  );

  // as in our UI needs only the following data, that's why flattening before using in context
  const flattenProductsData = products?.map(
    ({ id, title, price, category, image }) => ({
      id,
      title,
      price,
      category,
      image,
    })
  );

  return (
    <ProductsContext.Provider
      value={{
        products: flattenProductsData,
        productCategories,
        setProductFetchUrl,
        error,
        isLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// export ProductsContext
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

// export ProductsProvider
export default ProductsProvider;
