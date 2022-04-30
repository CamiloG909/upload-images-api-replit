const {Schema, model} = require('mongoose');

const Product = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		trim: true
	},
	price: {
		type: Number,
		default: 0
	},
	image: {
		public_id: String,
		secure_url: String
	}
},{
	versionKey: false,
});

module.exports = model('Product', Product);