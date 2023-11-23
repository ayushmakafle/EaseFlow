const express = require('express');
const Product = require('../models/ProductModel');
const asyncHandler = require('express-async-handler');
const router = express.Router();

//get route for all products
router.get('/products', asyncHandler(async(req, res) => { //use get method in frontend to fetch products
    const products = await Product.find({})
    res.json(products);
})
);

//get route for single product
router.get('/products/:id', asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)
    if(product) {
        res.json(product)
    }else{
        res.status(404).json({message: "product not found"})
    }
})
);

module.exports = router;