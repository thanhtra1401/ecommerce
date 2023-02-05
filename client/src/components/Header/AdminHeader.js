import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Admin</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/admin/products">
            Products
          </Nav.Link>
          <Nav.Link>Users</Nav.Link>
          <Nav.Link>Orders</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
