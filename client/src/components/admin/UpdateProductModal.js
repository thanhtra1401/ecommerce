import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ProductContext } from "../../context/ProductContext";

const UpdateProductModal = () => {
  const {
    productState: { product },
    showUpdateProductModal,
    setShowUpdateProductModal,
    updateProduct,
  } = useContext(ProductContext);

  //state
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { name, description, image, price, amount } = updatedProduct;

  useEffect(() => setUpdatedProduct(product), [product]);

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { message } = await updateProduct(updatedProduct);
    alert(message);
    setShowUpdateProductModal(false);
  };

  const closeDialog = () => {
    setUpdatedProduct(product);
    setShowUpdateProductModal(false);
  };
  return (
    <Modal show={showUpdateProductModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>You want to change?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              required
              aria-describedby="title-help"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              row={3}
              placeholder="Description"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Image"
              name="image"
              value={image}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Price"
              name="price"
              value={price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Amount"
              name="amount"
              value={amount}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateProductModal;
