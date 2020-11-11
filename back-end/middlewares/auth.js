const jwt = require('jsonwebtoken');

const secret = 'trybeergroup9';

const authJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const data = jwt.verify(token, secret);

    req.user = data;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  authJWT,
};
