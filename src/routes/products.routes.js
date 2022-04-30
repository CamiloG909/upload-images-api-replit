const { Router } = require('express');
const router = Router();
const { getProducts, getProduct, newProduct, updateProduct, deleteProduct } = require('../controllers/products.controller.js');
const fileUpload = require('express-fileupload');

router.route('/products')
	.get(getProducts)
	.post(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}), newProduct);

router.route('/products/:id')
	.get(getProduct)
	.put(updateProduct)
	.delete(deleteProduct);

module.exports = router;