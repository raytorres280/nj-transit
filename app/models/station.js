// Example model


module.exports = (sequelize, DataTypes) => {

    const Station = sequelize.define('Station', {
        name: DataTypes.STRING,
        createdAt: DataTypes.DATE,
    }, {
        classMethods: {
            associate: (models) => {
                Station.hasMany(models.Stop)
            }
        }
    });

    return Station;
  };
  
  