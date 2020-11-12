const rescue = require('express-rescue');
const userServ = require('../services');
const userModel = require('../models');

const loginUsersCont = rescue(async (req, res) => {
  const { email, password } = req.body;

  const result = await userServ.userLoginServ(email, password);
  return res.status(200).json(result);
});

const registerUsersCont = rescue(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const { id } = await userModel.getUserByEmailMod(email);
  if (id) throw new Error('E-mail already exist.');

  const newUser = await userServ.registerUsersServ(name, email, password, role);

  return res.status(201).json(newUser);
});

module.exports = {
  loginUsersCont,
  registerUsersCont,
};
