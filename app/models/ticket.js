'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
    createdAt: DataTypes.DATE,
    total: DataTypes.INTEGER,
    barcodeData: DataTypes.STRING,
    status: DataTypes.ENUM('VALID', 'ACTIVE', 'INVALID')

  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsTo(models.User)
    Ticket.belongsTo(models.Stop, { as: 'startStop', foreignKey: 'StartStopId'})
    Ticket.belongsTo(models.Stop, { as: 'endStop', foreignKey: 'EndStopId'})
  };
  return Ticket;
};