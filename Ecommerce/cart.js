// const express = require('express');
// const router = express.Router();
// const cartController = require('../controllers/cartController');
// const authMiddleware = require('../middleware/authMiddleware');

// router.use(authMiddleware.authenticate);

// router.post('/add', cartController.addToCart);
// router.delete('/remove/:itemId', cartController.removeFromCart);
// router.get('/list', cartController.listCartItems);

// module.exports = router;


const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

// Use authentication middleware
router.use(authMiddleware.authenticate);

// Define routes for cart operations
router.post('/add', cartController.addToCart);
router.delete('/remove/:itemId', cartController.removeFromCart);
router.get('/list', cartController.listCartItems);

module.exports = router;
