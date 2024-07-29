// // Backend (e.g., Express.js)
// const express = require('express');
// const app = express();
// app.use(express.json());

// let cart = {}; // Example in-memory cart storage

// app.post('/api/cart', (req, res) => {
//   const { itemId, quantity } = req.body;
//   cart[itemId] = (cart[itemId] || 0) + quantity;
//   res.json({ cart });
// });

// app.delete('/api/cart/:itemId', (req, res) => {
//   const { itemId } = req.params;
//   delete cart[itemId];
//   res.json({ cart });
// });

// app.get('/api/cart', (req, res) => {
//   res.json({ cart });
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
