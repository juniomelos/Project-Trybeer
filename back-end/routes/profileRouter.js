const { Router } = require('express');
const updateCont = require('../controllers');
const middleware = require('../middlewares');

const profileRouter = Router();

profileRouter.put('/', middleware.validateUpdate, updateCont.updateUsersNameCont);

module.exports = { profileRouter };
