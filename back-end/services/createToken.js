const jwt = require('jsonwebtoken');

const secret = 'trybeerGroup9';

const createToken = (payload) => {
  const headers = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, headers);

  return token;
};

module.exports = createToken;
