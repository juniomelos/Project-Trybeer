const authJWT = require('./auth');
const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const validateUpdate = require('./validateUpdate')

module.exports = {
  authJWT,
  validateLogin,
  validateRegister,
  validateUpdate,
};
