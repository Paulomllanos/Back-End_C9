const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
})


const Product = mongoose.model("productos", productSchema)

module.exports = Product;
