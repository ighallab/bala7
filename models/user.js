'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull: false,
      primaryKey:true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true
      
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'user',
    tableName:'users'
  });

  User.associate = (models)=>{
    User.hasOne(models.UserDetails,{
        foreignKey: 'userId', 
        as: 'user-details', 
        onDelete: 'CASCADE' 
    });
}
  return User;
};