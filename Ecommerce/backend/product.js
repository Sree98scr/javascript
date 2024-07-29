
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    newPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    oldPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  }, 
  );

  // Product.associate = models => {
  //   // Define association here
  //   Product.belongsTo(models.User, { as: 'buyer' });
  // };

  return Product;
};
