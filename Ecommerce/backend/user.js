module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type:DataTypes.STRING,
      unique:false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING // 'buyer' or 'seller'
  });

  return User;
};
