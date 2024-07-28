const{Sequelize,DataTypes}=require('sequelize');
const config = require('../config/config');

const sequelize=new Sequelize(
  'server',
  'postgres',
  'sree',
  {
    host:'localhost',
    dialect: 'postgres'
    
  }
);

const db = {
  Sequelize,
  sequelize,
  User: require('./user')(sequelize, DataTypes),
  Product: require('./product')(sequelize, DataTypes),
  Cart: require('./Cart')(sequelize, DataTypes)
};
db.User.hasMany(db.Product,{foreignKey:'buyerId'});
db.Product.belongsTo(db.User, { foreignKey: 'buyerId' });


module.exports = db;