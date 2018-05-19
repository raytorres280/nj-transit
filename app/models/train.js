'use strict';
module.exports = (sequelize, DataTypes) => {
  var Train = sequelize.define('Train', {
    name: DataTypes.STRING,
    chargeRate: DataTypes.INTEGER
  }, {});
  Train.associate = function(models) {
    // associations can be defined here
  };
  return Train;
};