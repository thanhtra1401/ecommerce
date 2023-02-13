import SingleProduct from "../components/Products/SingleProduct";
import MainLayout from "./../layouts/MainLayout";
import { useContext, useEffect } from "react";
import { ProductContext } from "./../context/ProductContext";

function Home() {
  const {
    productState: { products },
    getProducts,
  } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainLayout>
      <div className="row">
        {products.map((product) => (
          <div className="col-3" key={product.id}>
            <SingleProduct product={product} />
          </div>
        ))}
        {/* <div className="col-3">
          <SingleProduct />
        </div>
        <div className="col-3">
          <SingleProduct />
        </div>
        <div className="col-3">
          <SingleProduct />
        </div>
        <div className="col-3">
          <SingleProduct />
        </div>
        <div className="col-3">
          <SingleProduct />
        </div> */}
      </div>
    </MainLayout>
  );
}

export default Home;
