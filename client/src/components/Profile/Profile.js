import React from "react";

import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const data = {
  name: "Harry Maguire",
  description: "Description",
  contact: {
    email: ".com",
    phone: "0123456789",
    address: "VietNam",
  },
};

function Profile() {
  return (
    <Container className="profile mt-4">
      <Row>
        <Col md={4}>
          <Image
            style={{ width: "100%" }}
            src="https://vtv1.mediacdn.vn/zoom/700_438/2022/9/20/18-maguire-1663660369116981603469-crop-16636603735531227908950-crop-16751738899741999117299.jpg"
            roundedCircle
          />
        </Col>
        <Col md={8}>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <ListGroup className="contact-details">
            <ListGroupItem>
              <strong>Email:</strong> {data.contact.email}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Số điện thoại:</strong> {data.contact.phone}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Địa chỉ:</strong> {data.contact.address}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
