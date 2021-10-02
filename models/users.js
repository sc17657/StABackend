'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init(
    { 
    name: DataTypes.STRING,
    userid: DataTypes.STRING,
    password: DataTypes.STRING,
    loss: DataTypes.STRING,
    year_of_loss: DataTypes.INTEGER,
    date_joined: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    em_contact: DataTypes.STRING,
    em_phone: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'users',
  });
  return users;
};