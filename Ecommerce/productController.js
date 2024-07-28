const { Product } = require('../models');

exports.addProduct = async (req, res) => {
  try {
    const { name,category,image,old_price,new_price } = req.body;
    const product = await Product.create({ name, description, price, stockCount/* , sellerId: req.user.id */ });
    res.status(201).json({ product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { name,category,image,old_price,new_price } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) throw new Error('Product not found');

    product.name = name;
    product.category=category;
    product.image = image;
    product.old_price = old_price ;
    product.new_price= new_price;
    await product.save();

    res.json({ product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
