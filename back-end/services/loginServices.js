const userModel = require('../models');
const createToken = require('./createToken');

const userLoginServ = async (userEmail, userPassword) => {
  const user = await userModel.getUserByEmailMod(userEmail);

  const { password, ...data } = user;

  if (user && userPassword === password) {
    const token = createToken(data);
    return { token, data };
  } else {
    throw Error('Login ou senha inválido');
  }
};

module.exports = { userLoginServ };
