const { Category } = require("../models");

// get category
const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send({ success: true, categories });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};
module.exports = {
  getCategory,
};
