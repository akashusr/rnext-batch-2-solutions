// dependencies
import { useState } from "react";
import { useCart } from "../../providers/CartProvider";
import CartIcon from "../svgIcons/CartIcon";
import CartModal from "./CartModal";

const Cart = () => {
  // cart context
  const { cart } = useCart();

  // cart modal state
  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <div className="flow-root relative">
      <button
        className="group -m-2 flex items-center p-2"
        onClick={() => setIsShowCart(true)}
      >
        <CartIcon styleClasses="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cart?.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </button>

      {isShowCart && <CartModal onClose={() => setIsShowCart(false)} />}
    </div>
  );
};

export default Cart;
