const express = require('express');
const app = express();
const morgan = require('morgan');
const connectDb = require('./utils/db.js')

app.use(express.json());
app.use(morgan('dev'));
connectDb();

app.get('/', (req,res) => {
	res.json({
		message: 'Welcome'
	})
});

module.exports = app;