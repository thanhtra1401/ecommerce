import React from "react";
import { Col, Row } from "react-bootstrap";
import RegisterForm from "../components/auth/RegisterForm";
import RegisterLayout from "../layouts/RegisterLayout";

const Register = () => {
  return (
    <RegisterLayout>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <RegisterForm />
        </Col>
      </Row>
    </RegisterLayout>
  );
};

export default Register;
