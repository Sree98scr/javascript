const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Middleware to authenticate users
const authenticate = async (req, res, next) => {
  try {
    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization header missing or invalid' });
    }

    const token = authHeader.split(' ')[1]; // Extract token from the header
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use environment variable for secret

    // Find the user from the token
    const user = await User.findByPk(decoded.id);
    if (!user) throw new Error('User not found');

    // Attach the user object to the request
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized: ' + err.message });
  }
};

// Middleware to check if the user is a seller
const isSeller = async (req, res, next) => {
  try {
    if (req.user.role !== 'seller') {
      throw new Error('Only sellers can perform this action');
    }
    next();
  } catch (err) {
    res.status(403).json({ error: err.message });
  }
};

// Middleware to check if the user is a buyer
const isBuyer = async (req, res, next) => {
  try {
    if (req.user.role !== 'buyer') {
      throw new Error('Only buyers can perform this action');
    }
    next();
  } catch (err) {
    res.status(403).json({ error: err.message });
  }
};

module.exports = {
  authenticate,
  isBuyer,
  isSeller
};
