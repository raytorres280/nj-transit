// Example model


module.exports = (sequelize, DataTypes) => {

    const Train = sequelize.define('Train', {
        name: DataTypes.STRING,
        chargeRate: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: (models) => {
                // example on how to add relations
                Train.hasMany(models.Stop)
            },
            findTrainsFromIdArray: (idArr) => {
                return Train.find({
                    where: {
                        id: {
                            [Op.or]: trainIdArr
                        }
                    },
                    include: [{ model: Stop, include: [Station] }]
                })
            },
        }
    });
  
    return Train;
  };
  
  