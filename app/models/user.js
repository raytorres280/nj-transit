// Example model


module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING
    }, {
      classMethods: {
        associate: (models) => {
          // example on how to add relations
          User.hasMany(models.Ticket)
        }
      }
    });
  
    return User;
  };
  
  