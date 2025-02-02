/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// dependencies
import { useContext, useReducer } from "react";
import { CartContext } from "../contexts";
import cartReducer from "../reducers/cartReducer";

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// export cart hook
export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
