const { Router } = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const loginRouter = Router();

loginRouter.post('/', middleware.authJWT, controller.loginUsersCont);

module.exports = loginRouter;