"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
      price: DataTypes.FLOAT,
      amount: DataTypes.INTEGER,
      content: DataTypes.STRING,
      category: DataTypes.STRING,
      sold: DataTypes.INTEGER,
      checked: DataTypes.BOOLEAN,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
