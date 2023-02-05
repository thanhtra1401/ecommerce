import React from "react";
import { Container } from "react-bootstrap";
import HeaderLogin from "../components/Header/HeaderLogin";

const LoginLayout = (props) => {
  return (
    <>
      <HeaderLogin />
      <Container>{props.children}</Container>
    </>
  );
};

export default LoginLayout;
