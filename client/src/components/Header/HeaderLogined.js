import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderLogined.css";
import { AuthContext } from "./../../context/AuthContext";
import { Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const HeaderLogined = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  const toProfile = () => {
    navigate("/profile");
  };

  const toCart = () => {
    navigate("/cart");
  };
  const { cartState } = useContext(CartContext);

  const {
    logoutUser,
    authState: { user },
  } = useContext(AuthContext);
  return (
    <div className="header">
      <Container>
        <div className="header__container">
          <div onClick={toHome}>
            <img src="./img/logo(1).png" className="header__logo" alt="logo" />
          </div>

          <div className="header__search_cart">
            <div className="header__search">
              <input
                className="header__search-input"
                type="text"
                placeholder="Tìm kiếm"
              />
              <div className="header__search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="header__cart" onClick={toCart}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="header__cart-amount">
                {cartState.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            </div>
          </div>
          <div className="header__nav">
            <div className="header__nav-notification">
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className="header__user">
              <img
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
                alt="avatar"
                className="header__user-avatar"
              />
              <span className="header__user-name">{user.name}</span>
              <ul className="header__user-info">
                <li className="user-item" onClick={toProfile}>
                  Tài khoản của tôi
                </li>
                <li className="user-item" onClick={logoutUser}>
                  Đăng xuất
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderLogined;
