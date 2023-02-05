import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ProductContext } from "../../context/ProductContext";
import "./SingleProduct.css";
const SingleProduct = ({ product }) => {
  const { findProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    findProduct(product.id);
    return navigate("/productDetail");
  };

  const formatCash = (cash) =>
    cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div>
      <div className="home-product-item" onClick={handleClick}>
        <div className="home-product-item-image">
          <img
            className="home-product-item__img"
            src={product.image}
            alt={product.name}
          />
        </div>
        <h4 className="home-product-item__name">{product.name}</h4>
        <div className="home-product-item__price">
          <span className="home-product-item__price-old">
            {formatCash((product.price * 120) / 100)}đ
          </span>
          <span className="home-product-item__price-new">
            {formatCash(product.price)}đ
          </span>
        </div>
        <div className="home-product-item__action">
          <span className="home-product-item__like home-product-item__like--liked">
            <i className="home-product-item__like-icon-empty fa-regular fa-heart"></i>
            <i className="home-product-item__like-icon-fill fa-solid fa-heart"></i>
          </span>
          <div className="home-product-item__rating">
            <i className="home-product-item__star--gold fa-solid fa-star"></i>
            <i className="home-product-item__star--gold fa-solid fa-star"></i>
            <i className="home-product-item__star--gold fa-solid fa-star"></i>
            <i className="home-product-item__star--gold fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="home-product-item__sold">88 đã bán</span>
        </div>
        <div className="home-product-item__origin">
          <span className="home-product-item__origin-name">Việt Nam</span>
        </div>
        <div className="home-product-item__favourite">
          <i className="fa-solid fa-check"></i>
          <span>Yêu thích</span>
        </div>
        <div className="home-product-item__sale-off">
          <span className="home-product-item__sale-off-percent">20%</span>
          <span className="home-product-item__sale-off-label">GIẢM</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
