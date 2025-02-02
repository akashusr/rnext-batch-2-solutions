const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return [...state, action.payload];
    case "REMOVE_ITEM_FROM_CART":
      return state.filter((item) => item?.id !== action.payload);
  }
};

export default cartReducer;