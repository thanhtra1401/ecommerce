import React from "react";
import { Col, Row } from "react-bootstrap";
import LoginForm from "../components/auth/LoginForm";
import LoginLayout from "../layouts/LoginLayout";

const Login = () => {
  return (
    <LoginLayout>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <LoginForm />
        </Col>
      </Row>
    </LoginLayout>
  );
};

export default Login;
