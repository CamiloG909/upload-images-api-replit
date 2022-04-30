const productsCtrl = {};
const Product = require('../models/Product.js');
const {uploadImage, deleteImage} = require('../utils/cloudinary.js');
const fs = require('fs-extra');

productsCtrl.getProducts = async (req, res) => {
	try {
		const data = await Product.find();
		res.status(200).json(data);
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: ex.message
		})
	}
};

productsCtrl.getProduct = async (req, res) => {
	try {
		const { id } = req.params
		const data = await Product.findById(id);
		res.status(200).json(data);
	} catch (e) {
		res.status(500).json({
			message: e.message
		})
	}
};

productsCtrl.newProduct =	async (req, res) => {
	try {
		const { name, description, price } = req.body;
		const product = new Product({
			name,
			description,
			price,
		});

		if(req.files?.image) {
			const { public_id, secure_url } = await uploadImage(req.files.image.tempFilePath);
			product.image = {
				public_id,
				secure_url,
			}

			await fs.unlink(req.files.image.tempFilePath);
		}

		await product.save();
	
		res.status(201).json({
			message: 'Added new product',
			data: product
		});
	} catch (e) {
		res.status(500).json({
			message: e.message
		})
	}
};
	
productsCtrl.updateProduct = async (req, res) => {
	try {
	const { id } = req.params
	const { name, description, price } = req.body;

	const product = await Product.findByIdAndUpdate(id,{
		name,
		description,
		price,
	},
	{
		new: true
	});
	
	res.status(200).json({
		message: 'Update product successfully',
		product
	});
	} catch (e) {
		res.status(500).json({
			message: e.message
		})
	}
};

productsCtrl.deleteProduct = async (req, res) => {
	try {
		const { id } = req.params

		const product = await Product.findByIdAndDelete(id);

		if(!product) return res.status(404).json({ message: 'Product not found' });

		if(product.image?.public_id) await deleteImage(product.image.public_id);
		
		res.status(200).json({
			message: 'Deleted product successfully',
			id
		});
	} catch (e) {
		res.status(500).json({
			message: e.message
		});
	}
};

module.exports = productsCtrl;