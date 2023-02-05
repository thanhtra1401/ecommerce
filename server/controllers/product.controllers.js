const { Product } = require("../models");

// create product
const createProduct = async (req, res) => {
  const { name, description, image, price, amount } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      description,
      image,
      price,
      amount,
    });
    res
      .status(201)
      .send({ success: true, message: "Tạo thành công sản phẩm", newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// read all product
const readAllProduct = async (req, res) => {
  try {
    const productList = await Product.findAll();
    res.status(200).send({ success: true, productList });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

//read detail product
const readDetailProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDetail = await Product.findOne({
      where: {
        id,
      },
    });
    res.status(200).send({ success: true, productDetail });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

// updateProduct
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, image, price, amount } = req.body;
  try {
    const productUpdate = await Product.findOne({
      where: {
        id,
      },
    });
    productUpdate.name = name;
    productUpdate.description = description;
    productUpdate.image = image;
    productUpdate.price = price;
    productUpdate.amount = amount;
    await productUpdate.save();
    res.status(200).send({
      success: true,
      message: "Cập nhật thành công sản phẩm",
      productUpdate,
    });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

//delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDelete = await Product.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({ success: true, message: "Xóa thành công sản phẩm" });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

//upload image product
const uploadImageProduct = async (req, res) => {
  const { file } = req;
  const urlImage = `http://localhost:4000/${file.path}`;
  const { id } = req.params;
  const productUpload = await Product.findOne({
    where: {
      id: id,
    },
  });
  productUpload.image = urlImage;
  await productUpload.save();
  res.send(productUpload);
};

module.exports = {
  createProduct,
  readAllProduct,
  readDetailProduct,
  updateProduct,
  deleteProduct,
  uploadImageProduct,
};
