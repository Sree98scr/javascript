// // const express = require('express');
// // const router = express.Router();
// // const cartController = require('../controllers/cartController');
// // const authMiddleware = require('../middleware/authMiddleware');

// // router.use(authMiddleware.authenticate);

// // router.post('/add', cartController.addToCart);
// // router.delete('/remove/:itemId', cartController.removeFromCart);
// // router.get('/list', cartController.listCartItems);

// // module.exports = router;


// const express = require('express');
// const router = express.Router();
// const cartController = require('../controllers/cartController');
// const authMiddleware = require('../middleware/authMiddleware');

// // Use authentication middleware
// router.use(authMiddleware.authenticate);

// // Define routes for cart operations
// router.post('/add', cartController.addToCart);
// router.delete('/remove/:itemId', cartController.removeFromCart);
// router.get('/list', cartController.listCartItems);

// module.exports = router;



const express = require('express');
const router = express.Router();
const { Cart } = require('../models'); // Assuming Cart model is correctly imported

// Middleware function example
const middlewareFunction = (req, res, next) => {
  // Middleware logic here if needed
  next(); // Don't forget to call next() to pass control to the next middleware or route handler
};

// Routes
router.post('/add', middlewareFunction, async (req, res) => {
  try {
    // Your addToCart logic here
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/remove/:itemId', middlewareFunction, async (req, res) => {
  try {
    // Your removeFromCart logic here
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/list', middlewareFunction, async (req, res) => {
  try {
    // Your listCartItems logic here
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
