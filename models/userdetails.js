'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetails extends Model {}

  UserDetails.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull: false,
      primaryKey:true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull:false,
      
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull:false,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    age:{
      type: DataTypes.INTEGER
    },
    address:{
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    modelName: 'UserDetails',
    tableName:'userDetails'
  });

  UserDetails.associate = (models)=>{
    UserDetails.belongsTo(models.user,{
      foreignKey: 'userId'
    });
  }

  return UserDetails;
};