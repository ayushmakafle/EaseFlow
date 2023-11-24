const express = require('express');
const {errorHandler} = require('./middlewares/errorMiddleware');
const products = require('./data/products');
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');
const connectDB = require('./config/config');
const { green } = require('color-name');
require('colors'); //for terminal
const productRoutes = require('./routes/productsRoute');


dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => { 
    res.send('<h1> Welcome to the Node server </h1>');
});

app.use('/api',productRoutes)

app.use(errorHandler);

const PORT = process.env.PORT || 8080; // Use the port from environment variables or default to 8080
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.underline.green);
    });
