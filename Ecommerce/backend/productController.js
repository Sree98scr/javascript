




// controllers/productController.js
const { Product } = require('../models');
exports.addProduct = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log request body
    const { name, category, image, newPrice, oldPrice } = req.body;
    const product = await Product.create({ name, category, image, oldPrice, newPrice });
    res.status(201).json({ product });
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ error: 'Failed to add product' });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { name, category, image, oldPrice, newPrice } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    product.name = name;
    product.category = category;
    product.image = image;
    product.oldPrice = oldPrice;
    product.newPrice = newPrice;
    await product.save();

    res.json({ product });
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({ products });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};




exports.getByIdProducts = async (req, res) => {
  const {id}=req.params;
  try {
      const productid = await Product.findByPk(id);
      if (!productid) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.json({ productid });
    
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
};
}
exports.deleteProduct= async (req, res) => {
  const {id}=req.params.id;
  try {
      const productid = await Product.findByPk(id);
      if (!productid) {
        return res.status(404).json({ error: 'Product not found' });
      }
    await productid.destroy()
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  };
}