'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Stops', [{
      time: new Date('December 17, 1995 07:00:00'),
      routeStopNumber: 1,
      StationId: 1,
      TrainId: 1,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      time: new Date('December 17, 1995 07:15:00'),
      routeStopNumber: 2,
      StationId: 2,
      TrainId: 1,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      time: new Date('December 17, 1995 07:30:00'),
      routeStopNumber: 3,
      StationId: 3,
      TrainId: 1,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      time: new Date('December 17, 1995 07:45:00'),
      routeStopNumber: 4,
      StationId: 4,
      TrainId: 1,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      time: new Date('December 17, 1995 08:00:00'),
      routeStopNumber: 5,
      StationId: 5,
      TrainId: 1,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      time: new Date('December 17, 1995 08:15:00'),
      routeStopNumber: 6,
      StationId: 6,
      TrainId: 1,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      time: new Date('December 17, 1995 08:30:00'),
      routeStopNumber: 7,
      StationId: 7,
      TrainId: 1,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      time: new Date('December 17, 1995 08:45:00'),
      routeStopNumber: 8,
      StationId: 8,
      TrainId: 1,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      time: new Date('December 17, 1995 09:00:00'),
      routeStopNumber: 9,
      StationId: 9,
      TrainId: 1,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Stops', null, {});
  }
};
