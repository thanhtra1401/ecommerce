import React from "react";
import { Alert, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "./../../context/CartContext";
import OnlyHeaderLayout from "./../../layouts/OnlyHeaderLayout";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartState: { cartItems },
    addToCart,
    removeProductCart,
  } = useContext(CartContext);

  //const { getDetailProduct } = useContext(ProductContext);

  const updateCartHandler = async (product, quantity) => {
    //const data = getDetailProduct(product.id);

    // if (data.countInStock < quantity) {
    //   window.alert('Sorry. Product is out of stock');
    //   return;
    // }
    addToCart(product, quantity);
  };

  const removeItemHandler = (product) => {
    removeProductCart(product);
  };

  const checkoutHandler = () => {
    navigate("/paying");
  };

  const formatCash = (cash) =>
    cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <OnlyHeaderLayout>
        <h1 className="cart__header">Giỏ hàng của bạn</h1>
        <Row>
          <Col md={8}>
            {cartItems.length === 0 ? (
              <Alert variant="info">
                Giỏ hàng trống <Link to="/">Đi tới trang mua</Link>
              </Alert>
            ) : (
              <ListGroup>
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <Row className="align-items-center">
                      <Col md={4}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{" "}
                        <Link
                          to={`/product/${item.id}`}
                          className="cart__product-name"
                        >
                          {item.name}
                        </Link>
                      </Col>
                      <Col md={3}>
                        <Button
                          variant="light"
                          disabled={item.quantity === 1}
                          onClick={() =>
                            updateCartHandler(item, item.quantity - 1)
                          }
                        >
                          <i className="fas fa-minus-circle"></i>
                        </Button>{" "}
                        <span>{item.quantity}</span>{" "}
                        <Button
                          variant="light"
                          disabled={item.quantity === item.amount}
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1)
                          }
                        >
                          <i className="fas fa-plus-circle"></i>
                        </Button>
                      </Col>
                      <Col md={3}>{formatCash(item.price)} đ</Col>
                      <Col md={2}>
                        <Button
                          variant="light"
                          onClick={() => removeItemHandler(item)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>
                      Tổng tiền ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                      sản phẩm):{" "}
                      {formatCash(
                        cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
                      )}{" "}
                      đ
                    </h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                      >
                        Thanh toán
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </OnlyHeaderLayout>
    </>
  );
};

export default Cart;
