import React from "react";
import { Container } from "react-bootstrap";
import HeaderRegister from "../components/Header/HeaderRegister";

const RegisterLayout = (props) => {
  return (
    <>
      <HeaderRegister />
      <Container>{props.children}</Container>
    </>
  );
};

export default RegisterLayout;
