import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ProductContext } from "../../context/ProductContext";

const AddProductModal = () => {
  const { showAddProductModal, setShowAddProductModal, addProduct } =
    useContext(ProductContext);

  //state
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    amount: "",
  });
  const { name, description, image, price, amount } = newProduct;

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { message } = await addProduct(newProduct);

    alert(message);
    resetAddProductData();
  };
  const resetAddProductData = () => {
    setNewProduct({
      name: "",
      description: "",
      image: "",
      price: "",
      amount: "",
    });
    setShowAddProductModal(false);
  };
  const closeDialog = () => {
    resetAddProductData();
  };
  return (
    <Modal show={showAddProductModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Enter product you want to add</Modal.Title>
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

export default AddProductModal;
