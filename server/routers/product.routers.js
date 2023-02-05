const express = require("express");
const {
  createProduct,
  readAllProduct,
  readDetailProduct,
  updateProduct,
  deleteProduct,
  uploadImageProduct,
} = require("../controllers/product.controllers");
const authenticate = require("../middleware/auth/authenticate");
const authorize = require("../middleware/auth/authorize");
const { uploadImage } = require("../middleware/upload/uploadImage");

const productRouter = express.Router();

productRouter.post("/", authenticate, authorize("ADMIN"), createProduct);
productRouter.get("/", readAllProduct);
productRouter.get("/:id", readDetailProduct);
productRouter.put("/:id", authenticate, authorize("ADMIN"), updateProduct);
productRouter.delete("/:id", authenticate, authorize("ADMIN"), deleteProduct);
productRouter.post(
  "/upload-image/:id",
  authenticate,
  uploadImage("product-image"),
  uploadImageProduct
);

module.exports = { productRouter };
