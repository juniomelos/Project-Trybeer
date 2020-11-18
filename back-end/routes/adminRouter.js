const { Router } = require('express');
const adminController = require('../controllers');
const middleware = require('../middlewares');

const adminRouter = Router();

adminRouter.get('/', middleware.authJWT.authJWT, adminController.getProfile);

module.exports = { adminRouter };
