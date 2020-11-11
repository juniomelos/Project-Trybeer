const userModel = require('../models');
const { createToken } = require('./createToken');

const userLoginServ = async (userEmail, userPassword) => {
  const user = await userModel.getUserByEmailMod(userEmail);

  const { password, ...userData } = user;

  if (user || userPassword === password) {
    const token = createToken(userData);
    return { token, userData };
  }
};

module.exports = { userLoginServ };
