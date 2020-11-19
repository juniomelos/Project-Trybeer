const Schema = require('@mysql/xdevapi/lib/DevAPI/Schema');
const { Router } = require('express');
const { salesController } = require('../controllers');
const { validateSales } = require('../middlewares');

const salesRouter = Router();

salesRouter
  .post('/', validateSales.validateFinishSales, salesController.finishSales)
  .get('/', salesController.allSales)
  .put('/', validateSales.validateUpdateStatusSales, salesController.updateStatusCont);

module.exports = { salesRouter };
