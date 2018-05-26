'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      StartStopId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stops',
          key: 'id'
        }
      },
      EndStopId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stops',
          key: 'id'
        }
      },
      total: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      barcodeData: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      status: {
        type: Sequelize.ENUM,
        values: ['VALID', 'ACTIVE', 'INVALID']
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tickets');
  }
};