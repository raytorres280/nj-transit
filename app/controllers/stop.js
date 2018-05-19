const express = require('express');
const router = express.Router();
const db = require('../models');
const Op = db.Sequelize.Op
module.exports = (app) => {
  app.use('/route', router);
};


//find stops available from start/end