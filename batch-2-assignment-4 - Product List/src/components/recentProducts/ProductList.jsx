/* eslint-disable react/prop-types */
// dependencies
import noProductImg from "../../assets/images/no-product-found.png";
import ProductCard from "../common/ProductCard";
import ProductSkeletonCard from "../common/ProductSkeletonCard";

const ProductList = ({ products, isLoading }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* Product loading skeleton  */}
            {isLoading &&
              Array(8)
                .fill(0)
                .map((item, index) => <ProductSkeletonCard key={index} />)}

            {!isLoading &&
              products?.length > 0 &&
              products?.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
          </div>

          {!isLoading && products?.length < 1 && (
            <img src={noProductImg} alt="No Product Found" className="m-auto w-60" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
