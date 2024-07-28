module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique:true // Assuming username is required
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false // Assuming email is required
      },
      task: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true 
    // Assuming task name is required
      },
      description: {
        type: DataTypes.STRING // Assuming description is optional
      }
    });
  
    return Task;
  };
  