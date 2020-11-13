const { loginUsersCont, registerUsersCont } = require('./usersController');
const { getAllProducts } = require('./productController');

module.exports = {
  registerUsersCont,
  loginUsersCont,
  getAllProducts,
};
