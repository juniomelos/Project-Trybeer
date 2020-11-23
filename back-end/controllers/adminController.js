const rescue = require('express-rescue');
const userModel = require('../models');
const { salesModel } = require('../models');

const getProfile = rescue(async (req, res) => {
  const { email } = req.body;
  const profile = await userModel.getUserByEmailMod(email);
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
