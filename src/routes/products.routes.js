const { Router } = require('express');
const router = Router();
const { getProducts, getProduct, newProduct, updateProduct, deleteProduct } = require('../controllers/products.controller.js');

router.route('/products')
	.get(getProducts)
	.post(newProduct);

router.route('/products/:id')
	.get(getProduct)
	.put(updateProduct)
	.delete(deleteProduct);

module.exports = router;