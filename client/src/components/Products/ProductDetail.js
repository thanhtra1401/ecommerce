import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;
  const {
    productState: { product, productLoading },
    getDetailProduct,
  } = useContext(ProductContext);

  const { addToCart, cartState } = useContext(CartContext);

  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  const handleAddCart = (product) => {
    if (isAuthenticated) {
      const existItem = cartState.cartItems.find((x) => {
        return x.id === product.id;
      });
      const quantity = existItem ? existItem.quantity + 1 : 1;

      if (product.amount < quantity) {
        Swal.fire("Sản phẩm hiện không còn");
        return;
      }

      return addToCart(product, quantity);
    } else {
      Swal.fire("Bạn cần đăng nhập");
      return navigate("/login");
    }
  };

  const formatCash = (cash) =>
    cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    getDetailProduct(id);
  }, [id]);
  if (productLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    return (
      <div className="row product__detail mt-3 mb-3">
        <div className="col-lg-4 product__detail-img">
          <img className="detail-img" src={product.image} alt={product.name} />
        </div>
        <div className="col-lg-8 product__detail-info">
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
            <button
              className="btn__add-cart"
              onClick={handleAddCart.bind(this, product)}
            >
              <i className="fa-solid fa-cart-plus product__add-cart-icon"></i>
              Thêm vào giỏ hàng
            </button>
            <a href="https://www.facebook.com/" className="btn__inbox-now">
              <i className="fa-brands fa-facebook-messenger "></i>
              Nhắn tin ngay
            </a>
          </div>
          <div className="product__detail-phone">
            <span className="product__phone-text">Tư vấn mua hàng</span>
            <div className="product__phone-number">
              <i className="fa-solid fa-square-phone product__phone-icon"></i>
              <span className="product__phone-number-detail">0123456789</span>
            </div>
          </div>
          <div className="product__detail-share">
            <span className="product__share-text">
              Chia sẻ sản phẩm với bạn bè:
            </span>
            <i className="fa-brands fa-square-facebook product__share-icon"></i>
            <i className="fa-brands fa-square-twitter product__share-icon"></i>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
