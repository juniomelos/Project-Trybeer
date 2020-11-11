const rescue = require('express-rescue');
const createToken = require('../services/createToken');

const loginUsersCont = rescue(async (req, res, _next) => {
  const { user } = req;

  const { password: _, ...userWithoutPassword } = user;
  const token = createToken(userWithoutPassword);

  return res.status(200).json({ token });
});

module.exports = {
  loginUsersCont,
};
