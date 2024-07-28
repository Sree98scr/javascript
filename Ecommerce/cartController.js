// const { Cart, Product } = require('../models');

// exports.addToCart = async (req, res) => {
//   try {
//     const { id,ussername,productId, quality,price } = req.body;
//     const product = await Product.findByPk(productId);

//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     const cartItem = await Cart.create({
//       username: req.user.username, // Assuming username is available in the request
//       id,ussername,productId, quality,price: product.price
//     });

//     res.status(201).json({ cartItem });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.removeFromCart = async (req, res) => {
//   try {
//     const { itemId } = req.params;
//     const cartItem = await Cart.findByPk(itemId);

//     if (!cartItem) {
//       return res.status(404).json({ error: 'Cart item not found' });
//     }

//     await cartItem.destroy();
//     res.status(204).end();
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.listCartItems = async (req, res) => {
//   try {
//     const cartItems = await Cart.findAll({ where: { username: req.user.username } });
//     res.json({ cartItems });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


const { Cart, Product } = require('../models');

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body; // Fixed typos
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const cartItem = await Cart.create({
      username: req.user.username, // Assuming username is available in the request
      productId,
      quantity,
      price: product.price
    });

    res.status(201).json({ cartItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.params;
    const cartItem = await Cart.findByPk(itemId);

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    await cartItem.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({ where: { username: req.user.username } });
    res.json({ cartItems });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
