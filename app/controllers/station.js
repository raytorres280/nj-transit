const express = require('express');
const router = express.Router();
const db = require('../models');
const Op = db.Sequelize.Op
module.exports = (app) => {
  app.use('/stations', router);
};

router.get('/', (req, res, next) => {
  db.Station.findAll().then((stations) => res.json(stations));
});

router.post('/', (req, res, next) => {
  db.Station.create(req.body).then(station => res.json(station))
})