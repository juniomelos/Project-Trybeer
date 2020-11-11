const joi = require('joi');

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const validateLogin = (req, _res, next) => {
  const { email, password } = req.body;

  const result = schema.validate({ email, password });

  if (result.error) throw result.error;
  next();
};

module.exports = validateLogin;
