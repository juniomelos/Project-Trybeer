const joi = require('joi');

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const validateLogin = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = schema.validate({ email, password });

  // if (error) {
  //   throw ('Login our password incorrects!')
  //   // return res.status(500).json({ message: 'Login our password incorrects!' });
  // }
  console.log('req.body', req.body);
  if (error) throw error;
  return next();
};

module.exports = validateLogin;
