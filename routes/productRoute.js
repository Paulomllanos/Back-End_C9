const express = require('express');
const getProducts = require('../controllers/productController')

const productRouter = express.Router();


productRouter.route('/products')
    .get(getProducts)


module.exports = productRouter;