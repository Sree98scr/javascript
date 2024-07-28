const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const { Product } = require('../models'); // Assuming this is where your Product model is imported from

router.use(authMiddleware.authenticate);

// router.post('/add', productController.addProduct);
// router.put('/update/:productId', authMiddleware.isBuyer, productController.updateProduct);
// router.get('/list', productController.listProducts);
// router.get('/seller-list', authMiddleware.isSeller, productController.listSellerProducts);
// router.post('/purchase/:productId', authMiddleware.isSeller, productController.purchaseProduct);


router.post('/add', authMiddleware.isSeller, productController.addProduct);
router.put('/update/:productId', authMiddleware.isBuyer, productController.updateProduct);
router.get('/list', productController.listProducts);

module.exports = router;
