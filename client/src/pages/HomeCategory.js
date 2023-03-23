import React, { useContext, useEffect } from "react";
import SingleProduct from "../components/Products/SingleProduct";
import { ProductContext } from "../context/ProductContext";
import CategoryMainLayout from "../layouts/CategoryMainLayout";
import TitleCategory from "./../components/TitleCategory/TitleCategory";

const HomeCategory = ({ category }) => {
  const {
    productState: { products },
    getProductsCategory,
  } = useContext(ProductContext);
  useEffect(() => {
    getProductsCategory(category);
  }, [category]);
  const renderTitle = () => {
    switch (category) {
      case "Ao CLB":
        return <TitleCategory category="Áo CLB" />;
      case "Ao doi tuyen":
        return <TitleCategory category="Áo đội tuyển quốc gia" />;
      case "Giay bong da":
        return <TitleCategory category="Giày bóng đá" />;
      case "Ao khoac":
        return <TitleCategory category="Áo khoác" />;
      case "Ao dai tay":
        return <TitleCategory category="Áo dai tay" />;
      case "Phu kien":
        return <TitleCategory category="Phuj kieenj" />;
      default:
        return <TitleCategory category="He thong chi nhanh" />;
    }
  };
  return (
    <CategoryMainLayout>
      {renderTitle()}
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
            <SingleProduct product={product} />
          </div>
        ))}
      </div>
    </CategoryMainLayout>
  );
};

export default HomeCategory;
