const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, payload],
      };
    case "PRODUCT_LOADED_SUCCESS":
      return {
        ...state,
        products: payload,
      };
    case "PRODUCT_DETAIL_LOADED_SUCCESS":
      return {
        ...state,
        product: payload,
      };
    case "PRODUCT_LOADED_FAIL":
      return {
        ...state,
        products: [],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    case "FIND_PRODUCT":
      return {
        ...state,
        product: payload,
      };
    case "UPDATE_PRODUCT":
      const newProducts = state.products.map((product) =>
        product.id === payload.id ? payload : product
      );
      return {
        ...state,
        products: newProducts,
      };
    default:
      return { ...state };
  }
};
export default productReducer;
