const { Router } = require('express');
const productsCont = require('../controllers');

const productsRouter = Router();

productsRouter.get('/', productsCont.getAllProducts);

module.exports = { productsRouter };
