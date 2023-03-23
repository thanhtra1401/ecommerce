import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import HeaderDefault from "../components/Header/HeaderDefault";
import { AuthContext } from "../context/AuthContext";
import HeaderLogined from "../components/Header/HeaderLogined";
import UserNav from "../components/Navs/UserNav";

import Footer from "../components/Footer/Footer";

const CategoryMainLayout = (props) => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  if (isAuthenticated) {
    return (
      <>
        <HeaderLogined />
        <UserNav />
        <Container>{props.children}</Container>
        <Footer />/
      </>
    );
  } else {
    return (
      <>
        <HeaderDefault />
        <UserNav />

        <Container>{props.children}</Container>
        <Footer />
      </>
    );
  }
};

export default CategoryMainLayout;
