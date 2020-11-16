const { loginUsersCont, registerUsersCont, updateUsersNameCont } = require('./usersController');
const { getAllProducts } = require('./productController');

module.exports = {
  registerUsersCont,
  loginUsersCont,
  getAllProducts,
  updateUsersNameCont,
};
