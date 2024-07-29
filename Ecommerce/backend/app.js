




// app.js
const express = require('express');
const Sequelize=require('sequelize');
const cors = require('cors');
const db = require('./models'); // Assuming your models/index.js exports db
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);

// Database connection
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    return db.sequelize.sync(); // Sync models with database
  })
  // .then(() => {
  //   console.log('Database synced');
  //   // Additional setup if needed
  // })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
  });

  db.sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Failed to sync database:', err));



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
