const morgan = require('morgan');
const authRoutes = require('./routes/authRoute');

const express = require('express');
const {errorHandler} = require('./middlewares/errorMiddleware');
const products = require('./data/products');
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');
const connectDB = require('./config/config');
const { green } = require('color-name');
require('colors'); //for terminal
const productRoutes = require('./routes/productsRoute');
const { Category } = require('./models/Category');
const CategoryRoutes = require('./routes/categoryRoutes');


dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth',authRoutes)

app.get('/', (req, res) => { 
    res.send('<h1> Welcome to the Node server </h1>');
});

app.use('/api',productRoutes)
app.use('/api',CategoryRoutes)

app.use(errorHandler);

const PORT = process.env.PORT || 8080; // Use the port from environment variables or default to 8080
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.underline.green);
    });
