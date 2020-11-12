const authJWT = require('./auth');
const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');

module.exports = {
  authJWT,
  validateLogin,
  validateRegister,
};
