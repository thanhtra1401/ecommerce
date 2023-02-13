import React from "react";
import ProductDetail from "../components/Products/ProductDetail";
import OnlyHeaderLayout from "../layouts/OnlyHeaderLayout";

const ProductDetailPage = () => {
  return (
    <>
      <OnlyHeaderLayout>
        <ProductDetail />
      </OnlyHeaderLayout>
    </>
  );
};

export default ProductDetailPage;
