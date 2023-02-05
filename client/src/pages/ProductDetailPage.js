import React from "react";
import ProductDetail from "../components/Products/ProductDetail";

import ProductDetailLayout from "../layouts/ProductDetailLayout";

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetailLayout>
        <ProductDetail />
      </ProductDetailLayout>
    </>
  );
};

export default ProductDetailPage;
