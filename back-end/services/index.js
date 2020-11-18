const createToken = require('./createToken');
const { userLoginServ } = require('./loginServices');
const { registerUsersServ } = require('./registerServices');
const { updateUserServ } = require('./updateServices');
const secret = require('./secret');

module.exports = {
  createToken,
  userLoginServ,
  registerUsersServ,
  updateUserServ,
  secret,
};
