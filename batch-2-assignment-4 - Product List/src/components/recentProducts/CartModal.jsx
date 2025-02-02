/* eslint-disable react/prop-types */
import { useMemo } from "react";
import emptyCartImg from "../../assets/images/empty-cart.jpg";
import useToast from "../../hooks/useToast";
import { useCart } from "../../providers/CartProvider";
import CloseIcon from "../svgIcons/CloseIcon";
import TrashIcon from "../svgIcons/TrashIcon";

const CartModal = ({ onClose }) => {
  // cart context
  const { cart, dispatch } = useCart();

  // toast message hook init
  const { showSuccess } = useToast();

  // handle item remove
  const handleItemRemove = (id) => {
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: id,
    });

    // show message
    showSuccess("Product removed from cart!");
  };

  // calculate cart total
  const cartTotal = useMemo(() => {
    return cart?.reduce((total, next) => (total += next.price), 0).toFixed(2);
  }, [cart]);

  return (
    <div className="absolute right-0 top-auto border p-2 rounded-md">
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-6 relative">
          <div className="text-right" onClick={onClose}>
            <CloseIcon />
          </div>

          {cart?.length > 0 && (
            <h4 className="text-base font-bold text-gray-800 mt-6">
              {cart?.length} {cart?.length > 1 ? "Items" : "Item"}
            </h4>
          )}

          <div className="space-y-4 mt-6">
            {cart?.length > 0 &&
              cart?.map((item) => (
                <div
                  key={item?.id}
                  className="flex flex-wrap items-center justify-between gap-4"
                >
                  <div className="flex items-center w-9/12">
                    <img
                      src={item?.image}
                      className="w-16 h-16 p-2 shrink-0 bg-gray-200 rounded-md"
                      alt={item?.title}
                    />
                    <div className="ml-4">
                      <p className="text-sm text-gray-800 line-clamp-1">
                        {item?.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">1 Item</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-base font-bold text-gray-800 mr-4">
                      ${item?.price}
                    </span>
                    <span onClick={() => handleItemRemove(item?.id)}>
                      <TrashIcon />
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {cart?.length === 0 && <img src={emptyCartImg} />}

          {cart?.length > 0 && (
            <div className="flex mt-6">
              <span className="text-base font-bold text-gray-800 flex-1">
                Total
              </span>
              <span className="text-base font-bold text-gray-800">
                ${cartTotal}
              </span>
            </div>
          )}

          <div className="flex max-sm:flex-col gap-4 mt-6">
            <button
              type="button"
              className="text-sm px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md tracking-wide"
              onClick={onClose}
            >
              Continue shopping
            </button>
            {cart?.length > 0 && (
              <button
                type="button"
                className="text-sm px-5 py-2.5 w-full bg-teal-600 hover:bg-teal-700 text-white rounded-md tracking-wide"
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
