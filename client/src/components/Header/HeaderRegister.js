import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const HeaderRegister = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <Container>
        <div className="header__container">
          <img
            src="./img/logo(1).png"
            className="header__logo"
            alt="logo"
            onClick={toHome}
          />
          <div className="header__login">Đăng ký</div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderRegister;
