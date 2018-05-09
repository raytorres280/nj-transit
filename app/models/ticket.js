// Example model


module.exports = (sequelize, DataTypes) => {

    const Ticket = sequelize.define('Ticket', {
        createdAt: DataTypes.DATE,
        status: DataTypes.ENUM('inactive', 'active', 'used')

    }, {
        classMethods: {
            associate: (models) => {
                Ticket.belongsTo(models.User)
                Ticket.belongsTo(models.Station, {as: 'startStation', foreignKey: 'startStationId'})
                Ticket.belongsTo(models.Station, {as: 'endStation', foreignKey: 'endStationId'})
            }
        }
    });
  
    return Ticket;
  };
  
  