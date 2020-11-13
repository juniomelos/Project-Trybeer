const {
  getUserByEmailMod,
  registerUsersMod,
  getAllUsersMod,
} = require('./usersModel');

const { getAllProductMod } = require('./productModel');

module.exports = {
  getUserByEmailMod,
  registerUsersMod,
  getAllUsersMod,
  getAllProductMod,
};
