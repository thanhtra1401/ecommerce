import axios from "axios";
import { createContext, useReducer, useState } from "react";
import productReducer from "../reducer/productReducer";

export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  //state
  const [productState, dispatch] = useReducer(productReducer, {
    products: [],
    product: null,
  });

  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);

  //Add Product
  const addProduct = async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/products",
        newProduct
      );
      if (response.data.success) {
        dispatch({ type: "ADD_PRODUCT", payload: response.data.newProduct });
        return response.data;
      }
    } catch (error) {
      return error;
    }
  };
  const getProductDetails = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/products/${id}`
      );
      if (response.data.success) {
        dispatch({
          type: "PRODUCT_DETAIL_LOADED_SUCCESS",
          payload: response.data.productDetail,
        });
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Get all product
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/products");
      if (response.data.success) {
        dispatch({
          type: "PRODUCT_LOADED_SUCCESS",
          payload: response.data.productList,
        });
        return response.data;
      }
    } catch (error) {
      dispatch({ type: "PRODUCT_LOADED_FAIL" });
    }
  };

  //Delete product
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/products/${id}`
      );
      if (response.data.success) {
        dispatch({ type: "DELETE_PRODUCT", payload: id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Find product when update
  const findProduct = (id) => {
    const product = productState.products.find((product) => product.id === id);
    dispatch({ type: "FIND_PRODUCT", payload: product });
  };

  //Update product
  const updateProduct = async (updatedProduct) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/products/${updatedProduct.id}`,
        updatedProduct
      );
      if (response.data.success) {
        dispatch({
          type: "UPDATE_PRODUCT",
          payload: response.data.productUpdate,
        });
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const productContextData = {
    productState,
    showAddProductModal,
    setShowAddProductModal,
    showUpdateProductModal,
    setShowUpdateProductModal,
    addProduct,
    getProducts,
    deleteProduct,
    findProduct,
    updateProduct,
    getProductDetails,
  };
  return (
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
