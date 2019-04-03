const express = require('express');

const app= new express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');


app.use('/product',productRoutes);
app.use('/order',orderRoutes);

module.exports = app;