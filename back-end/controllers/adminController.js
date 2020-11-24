const rescue = require('express-rescue');
const { salesModel, usersModel } = require('../models');

const getProfile = rescue(async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const profile = await usersModel.getUserByEmailMod(email);
  console.log('profile', profile);

  if (profile.email === undefined) throw new Error('email não cadastrado');
  const { id, password, role, ...newProfile } = profile;
  res.status(200).json(newProfile);
});

const getAdminSales = rescue(async (req, res) => {
  const id = req.params.id;
  const sales = await salesModel.getAdminOrderById(id);
  res.status(200).json(sales);
});

module.exports = { getProfile, getAdminSales };
