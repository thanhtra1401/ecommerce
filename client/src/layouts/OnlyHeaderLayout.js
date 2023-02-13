import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import UserNav from "../components/Navs/UserNav";
import { AuthContext } from "../context/AuthContext";
import HeaderLogined from "./../components/Header/HeaderLogined";
import HeaderDefault from "./../components/Header/HeaderDefault";

const OnlyHeaderLayout = (props) => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  if (isAuthenticated) {
    return (
      <>
        <HeaderLogined />
        <UserNav />
        <Container>{props.children}</Container>
      </>
    );
  } else {
    return (
      <>
        <HeaderDefault />
        <UserNav />

        <Container>{props.children}</Container>
      </>
    );
  }
};

export default OnlyHeaderLayout;
