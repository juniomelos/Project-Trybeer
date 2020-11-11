const { Router } = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const loginRouter = Router();

loginRouter.get('/', middleware.validateLogin, controller.loginUsersCont);

module.exports = loginRouter;
