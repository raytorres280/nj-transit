'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
    createdAt: DataTypes.DATE
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsTo(models.User)
    Ticket.belongsTo(models.Stop, { as: 'startStop', foreignKey: 'StartStationId'})
    Ticket.belongsTo(models.Stop, { as: 'endStop', foreignKey: 'EndStationId'})
  };
  return Ticket;
};