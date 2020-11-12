const rescue = require('express-rescue');
const loginServices = require('../services');

const loginUsersCont = rescue(async (req, res) => {
  const { email, password } = req.body;

  const result = await loginServices.userLoginServ(email, password);

  return res.status(200).json(result);
});

module.exports = {
  loginUsersCont,
};
