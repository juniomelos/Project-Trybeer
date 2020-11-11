const jwt = require('jsonwebtoken');
const model = require('../models/usersModel');

const secret = 'trybeergroup9';

const authJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const { email } = decoded.data;

    const user = await model.getUserByEmailMod(email);

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  authJWT,
};
