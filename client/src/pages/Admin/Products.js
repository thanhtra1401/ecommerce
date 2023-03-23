import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ProductContext } from "../../context/ProductContext";
import AdminMainLayout from "../../layouts/AdminMainLayout";
import Button from "react-bootstrap/Button";
import AddProductModal from "../../components/admin/AddProductModal";
import UpdateProductModal from "../../components/admin/UpdateProductModal";
import axios from "axios";

const Products = () => {
  const {
    productState: { products, product },
    getProducts,
    setShowAddProductModal,
    setShowUpdateProductModal,
    findProduct,
    deleteProduct,
  } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);

  // const handleDelete = (id) => {
  //   deleteProduct(id);
  // };
  const handleUpdate = (id) => {
    findProduct(id);
    setShowUpdateProductModal(true);
  };

  //upload image
  const [image, setImage] = useState({ preview: "", data: "" });
  // const [status, setStatus] = useState("");
  // const handleSubmit = async (e) => {
  //   let a = 4;
  //   console.log("setup");
  //   e.preventDefault();
  //   let formData = new FormData();
  //   formData.append("product-image", image.data);
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:4000/api/products/upload-image/${a}`,
  //       formData
  //     );

  //     // if (response) setStatus(response.statusText);
  //   } catch (error) {
  //     console.log(1234);
  //   }
  // };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <AdminMainLayout>
      <h2 className="text-center mt-2">Product management</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>

            <th>Price</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Upload</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
              <td>{product.category}</td>
              <td>
                <div>
                  <form className="d-flex ">
                    <input
                      type="file"
                      name="file"
                      enctype="multipart/form-data"
                      onChange={handleFileChange}
                    ></input>
                    <button
                      type="submit"
                      onClick={async (e) => {
                        console.log("setup");
                        e.preventDefault();
                        let formData = new FormData();
                        formData.append("product-image", image.data);
                        try {
                          await axios.post(
                            `http://localhost:4000/api/products/upload-image/${product.id}`,
                            formData
                          );
                          alert("upload thành công");
                        } catch (error) {
                          console.log(1234);
                        }
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </td>
              <td className="d-flex justify-content-between">
                <i
                  class="fa-solid fa-pen-to-square"
                  role="button"
                  onClick={handleUpdate.bind(this, product.id)}
                ></i>
                <i
                  class="fa-solid fa-trash"
                  role="button"
                  onClick={deleteProduct.bind(this, product.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddProductModal />
      {product ? <UpdateProductModal /> : null}
      <Button
        className=" mt-2 mx-auto text-center"
        onClick={setShowAddProductModal.bind(this, true)}
      >
        <i class="fa-solid fa-plus"></i>
      </Button>
    </AdminMainLayout>
  );
};

export default Products;
