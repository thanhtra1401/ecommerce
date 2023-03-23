import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderDefault.css";
import Swal from "sweetalert2";

const HeaderDefault = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    Swal.fire("Bạn cần đăng nhập");
    navigate("/login");
  };
  // const toHome = () => {
  //   navigate("/");
  // };
  return (
    <div className="header">
      <Container>
        <div className="header__container">
          <img
            src="./img/logo(1).png"
            className="header__logo"
            alt="logo"
            // onClick={toHome}
          />
          <i
            className="fa-solid fa-magnifying-glass search-mobile-btn"
            style={{ display: "none" }}
          ></i>
          <div className="header__search_cart">
            <div className="header__search ">
              <input
                className="header__search-input hide-on-mobile"
                type="text"
                placeholder="Tìm kiếm"
              />
              <div className="header__search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="header__cart hide-on-mobile" onClick={toLogin}>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="header__nav hide-on-mobile">
            <Link to="/register" className="header__nav-register">
              Đăng kí
            </Link>
            <Link to="/login" className="header__nav-login">
              Đăng nhập
            </Link>
          </div>
        </div>
      </Container>
    </div>

    /* <Navbar className="header" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <input type="text" />
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  */
  );
};

export default HeaderDefault;
