'use strict';
module.exports = (sequelize, DataTypes) => {
  var Station = sequelize.define('Station', {
    name: DataTypes.STRING
  }, {});
  Station.associate = function(models) {
    // associations can be defined here
  };
  return Station;
};