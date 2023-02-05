import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const {
    productState: { product },
  } = useContext(ProductContext);

  const formatCash = (cash) =>
    cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="row product__detail mt-3 mb-3">
      <div className="col-4 product__detail-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="col-8 product__detail-info">
        <h3 className="product__detail-header">{product.name}</h3>
        <span className="product__detail-rating">
          <i className="product__detail-rating--gold fa-solid fa-star"></i>
          <i className="product__detail-rating--gold fa-solid fa-star"></i>
          <i className="product__detail-rating--gold fa-solid fa-star"></i>
          <i className="product__detail-rating--gold fa-solid fa-star"></i>
          <i className="product__detail-rating--gold fa-solid fa-star"></i>
        </span>
        <span className="product__detail-evaluate"> (100 đánh giá)</span>
        <div className="product__detail-price">
          {formatCash(product.price)}đ
        </div>
        <div className="product__detail-buy">
          <button className="btn__add-cart">
            <i class="fa-solid fa-cart-plus product__add-cart-icon"></i>
            Thêm vào giỏ hàng
          </button>
          <a href="https://www.facebook.com/" className="btn__inbox-now">
            <i class="fa-brands fa-facebook-messenger "></i>
            Nhắn tin ngay
          </a>
        </div>
        <div className="product__detail-phone">
          <span className="product__phone-text">Tư vấn mua hàng</span>
          <div className="product__phone-number">
            <i class="fa-solid fa-square-phone product__phone-icon"></i>
            <span className="product__phone-number-detail">0123456789</span>
          </div>
        </div>
        <div className="product__detail-share">
          <span className="product__share-text">
            Chia sẻ sản phẩm với bạn bè:
          </span>
          <i class="fa-brands fa-square-facebook product__share-icon"></i>
          <i class="fa-brands fa-square-twitter product__share-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
