const {Schema, model} = require('mongoose');

const Product = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	description: {
		type: String,
		trim: true
	},
	price: {
		type: Number,
		default: 0
	}
},{
	versionKey: false,
});

module.exports = model('Product', Product);