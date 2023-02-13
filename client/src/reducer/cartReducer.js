const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CART_ADD_ITEM":
      const newItem = payload;
      const existItem = state.cartItems.find((item) => item.id === newItem.id);
      const cartItems = existItem
        ? state.cartItems.map((item) =>
            item.id === existItem.id ? newItem : item
          )
        : [...state.cartItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cartItems };

    case "CART_REMOVE_ITEM": {
      const cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cartItems };
    }
    default:
      return state;
  }
};
export default cartReducer;
