const userModel = require('../models');

const getAllProducts = async (req, res) => {
  const products = await userModel.getAllProductMod();
  console.log('produtos', products);
  res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
