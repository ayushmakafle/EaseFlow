const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');
const connectDB = require('./config/config');
const { green } = require('color-name');
require('colors'); //for terminal

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => { 
    res.send('<h1> Welcome to the Node server </h1>');
});

app.get('/products', (req, res) => { //use get method in frontend to fetch products
    res.json(products);
});

app.get('/products/:id',(req,res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})
 const PORT = process.env.PORT || 8080; // Use the port from environment variables or default to 8080
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.underline.green);
    });
