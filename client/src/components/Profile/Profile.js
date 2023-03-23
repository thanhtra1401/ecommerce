import React, { useContext } from "react";

import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const {
    authState: { user },
  } = useContext(AuthContext);
  console.log(user);
  return (
    <Container className="profile mt-4">
      <Row>
        <Col md={4}>
          <Image
            style={{ width: "300px", height: "300px" }}
            src={user.avatar}
            roundedCircle
          />
        </Col>
        <Col md={8}>
          <h1>{user.name}</h1>
          <p>{user.description}</p>
          <ListGroup className="contact-details">
            <ListGroupItem>
              <strong>Email:</strong> {user.email}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Số điện thoại:</strong> {user.phoneNumber}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Địa chỉ:</strong> {user.address}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
