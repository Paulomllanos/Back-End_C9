const express = require('express');
const {auth, admin} = require('../middleware/auth')
const { 
    getProducts, 
    createProduct, 
    getProductById, 
    editProduct, 
    deleteProduct, 
    reduceStock 
} = require('../controllers/productController')

const productRouter = express.Router();


productRouter.route('/products')
    .get(getProducts)

productRouter.route("/createProduct")
    .post(auth , admin, createProduct)

productRouter.route("/product/:id")
    .get(getProductById)
    .put(auth, admin, editProduct)
    .delete(auth, admin, deleteProduct)

productRouter.route("/reduceStock")
    .put(reduceStock)

module.exports = productRouter;