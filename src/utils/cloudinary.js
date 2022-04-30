const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env['CLOUDINARY_CLOUD_NAME'], 
  api_key: process.env['CLOUDINARY_API_KEY'], 
  api_secret: process.env['CLOUDINARY_API_SECRET'],
  secure: true
});

async function uploadImage (filePath) {	
	await cloudinary.uploader.upload(filePath, {
		folder: 'upload-images-replit',
	}, );
}

async function deleteImage(imageId) {
	return await cloudinary.uploader.destroy(imageId)
}

module.exports = uploadImage;