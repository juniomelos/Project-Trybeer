const { Router } = require('express');
const loginCont = require('../controllers');
const middleware = require('../middlewares');

const loginRouter = Router();

loginRouter.post('/', middleware.validateLogin, loginCont.loginUsersCont);

module.exports = loginRouter;
