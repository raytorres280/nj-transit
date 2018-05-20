'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stop = sequelize.define('Stop', {
    time: DataTypes.DATE,
    routeStopNumber: DataTypes.INTEGER
  }, {});
  Stop.associate = function(models) {
    // associations can be defined here
    Stop.belongsTo(models.Train);
    Stop.belongsTo(models.Station, {foreignKey: 'StationId'});
  };
  return Stop;
};