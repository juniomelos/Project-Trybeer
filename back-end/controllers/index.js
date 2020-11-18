const {
  loginUsersCont,
  registerUsersCont,
  updateUsersNameCont,
} = require('./usersController');
const { getProfile } = require('./adminController');
const { getAllProducts } = require('./productController');

module.exports = {
  registerUsersCont,
  loginUsersCont,
  getAllProducts,
  updateUsersNameCont,
  getProfile,
};
