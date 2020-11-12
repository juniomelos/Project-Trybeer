const { Router } = require('express');
const registerCont = require('../controllers');
const middleware = require('../middlewares');

const registerRouter = Router();

registerRouter.post('/', middleware.validateRegister, registerCont.registerUsersCont);

module.exports = { registerRouter };
