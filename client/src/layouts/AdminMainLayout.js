import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import { AuthContext } from "../context/AuthContext";
import AdminHeader from "../components/Header/AdminHeader";

const AdminMainLayout = (props) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  if (user.type === "ADMIN") {
    return (
      <>
        <AdminHeader />
        <Container>{props.children}</Container>
      </>
    );
  } else {
    return alert("Not permitted");
  }
};

export default AdminMainLayout;
