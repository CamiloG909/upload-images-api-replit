const mongoose = require('mongoose');
const URI = process.env['DB_URI'];

async function connect () {
	try {
		await mongoose.connect(URI);
		console.log('MongoDB connected');
	} catch (e) {
		console.log(e)
	}
}

module.exports = connect;