// const{Sequelize,DataTypes}=require('sequelize');

// const sequelize=new Sequelize(
//   'server',
//   'postgres',
//   'sree',
//   {
//     host:'localhost',
//     dialect: 'postgres'
    
//   }
// );

// const db = {}

// db.User=require('./user')(sequelize, DataTypes);
// db.Product= require('./product')(sequelize, DataTypes);
// db.Cart= require('./Cart')(sequelize, DataTypes)

// db.Sequelize= Sequelize;
// db.sequelize= sequelize;

// module.exports = db;



// db.js (assuming this is your Sequelize initialization and model definitions file)

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'server',     // Your database name
  'postgres',   // Your database username
  'sree',       // Your database password
  {
    host: 'localhost',
    dialect: 'postgres'
    // You can add more options here if needed
  }
);

const db = {};

// Define your Sequelize models
db.User = require('./user')(sequelize, DataTypes);
db.Product = require('./product')(sequelize, DataTypes);
db.Cart = require('./cart')(sequelize, DataTypes); // Note: Use lowercase 'cart' here, assuming your file is named 'cart.js'

// Assign Sequelize and sequelize instances to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
