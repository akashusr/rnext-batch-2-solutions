// dependencies
import useToast from "../../hooks/useToast";
import { useCart } from "../../providers/CartProvider";
import CartIcon from "../svgIcons/CartIcon";
import CartRemoveIcon from "../svgIcons/CartRemoveIcon";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  // cart context
  const { cart, dispatch } = useCart();

  // toast message hook init
  const { showSuccess } = useToast();

  // handle add to cart
  const handleAddToCart = () => {
    // destructure product data to flatten for cart
    const { id, title, price, image } = product;

    // send data to cart reducer
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: { id, title, price, image },
    });

    // show message
    showSuccess("Product added to cart!");
  };

  // handle remove from cart
  const handleRemoveFromCart = () => {
    // send data to cart reducer
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: product?.id,
    });

    // show message
    showSuccess("Product removed from cart!");
  };

  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={product?.image}
          alt="Front of men's Basic Tee in black."
          className="h-full w-full object-cover object-top lg:h-full lg:w-full bg-gray-100 p-4"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700 line-clamp-1">
            {product?.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product?.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product?.price}</p>
      </div>
      {/* Button */}
      {cart?.find((item) => item?.id === product?.id) ? (
        <div
          className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1"
          onClick={handleRemoveFromCart}
        >
          <div className="flex px-3 py-2 justify-center text-red-400">
            <CartRemoveIcon />
            Remove From Cart
          </div>
        </div>
      ) : (
        <div
          className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1"
          onClick={handleAddToCart}
        >
          <div className="flex px-3 py-2 justify-center">
            <CartIcon styleClasses="mr-2.5 h-5 w-5 flex-none stroke-slate-400" />
            Add To Cart
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
