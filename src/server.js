const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(require('./routes/index.routes.js'));
app.use(require('./routes/products.routes.js'));

module.exports = app;