// Example model


module.exports = (sequelize, DataTypes) => {

    const Stop = sequelize.define('Stop', {
        time: DataTypes.TIME,
        routeStopNumber: DataTypes.INTEGER,
    }, {
        classMethods: {
            associate: (models) => {
                Stop.belongsTo(models.Station)
                Stop.belongsTo(models.Train)
            },
            findStopsForStartAndEnd: (start, end) => {
                return db.Stop.find({
                    where: {
                        stationId: {
                            [Op.or]: [start, end]
                        }
                    }
                })
            }
        }
    });
  
    return Stop;
  };
  
  