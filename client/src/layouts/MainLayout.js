import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import HeaderDefault from "../components/Header/HeaderDefault";
import { AuthContext } from "../context/AuthContext";
import HeaderLogined from "../components/Header/HeaderLogined";
import UserNav from "../components/Navs/UserNav";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";

const MainLayout = (props) => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  if (isAuthenticated) {
    return (
      <>
        <HeaderLogined />
        <UserNav />
        <Slider />
        <Container>{props.children}</Container>
        <Footer />/
      </>
    );
  } else {
    return (
      <>
        <HeaderDefault />
        <UserNav />
        <Slider />
        <Container>{props.children}</Container>
        <Footer />
      </>
    );
  }
};

export default MainLayout;
