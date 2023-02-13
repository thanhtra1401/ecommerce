import { createContext, useReducer } from "react";

import cartReducer from "../reducer/cartReducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  });

  const addToCart = (product, quantity) => {
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
  };
  const removeProductCart = (product) => {
    dispatch({
      type: "CART_REMOVE_ITEM",
      payload: product,
    });
  };

  const cartContextData = {
    cartState,
    addToCart,
    removeProductCart,
  };
  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
