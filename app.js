const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./src/routes/customerRoutes');

const app = express();
app.use(bodyParser.json());
app.use(customerRoutes);

module.exports = app;
