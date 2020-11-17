const userModel = require('../models');

const getAllProducts = async (_req, res) => {
  const products = await userModel.getAllProductMod();
  res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
