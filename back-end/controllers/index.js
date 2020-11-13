<<<<<<< Updated upstream
const { loginUsersCont, registerUsersCont } = require('./usersController');

module.exports = {
  loginUsersCont,
  registerUsersCont,
=======
const { loginUsersCont } = require('./loginController');
const { getAllProducts } = require('./productController');

module.exports = {
  loginUsersCont,
  getAllProducts,
>>>>>>> Stashed changes
};
