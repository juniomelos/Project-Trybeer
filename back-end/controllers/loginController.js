const rescue = require('express-rescue');
const loginServices = require('../services')

const loginUsersCont = rescue(async (req, res, _next) => {
  const { email, password } = req.body;

  const result = await loginServices.userLoginServ(email, password)
  console.log(result);

  return res.status(200).json(result);
});

module.exports = {
  loginUsersCont,
};
