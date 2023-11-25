const express = require('express');
const {getProducts, createProduct} = require('../controllers/productController')

const productRouter = express.Router();


productRouter.route('/products')
    .get(getProducts)

productRouter.route("/createProduct")
    .post(createProduct)


module.exports = productRouter;