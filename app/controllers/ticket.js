const express = require('express');
const router = express.Router();
const db = require('../models');
const Op = db.Sequelize.Op;
const QRCode = require('qrcode');

module.exports = (app) => {
  app.use('/tickets', router);
};

router.post('/buy', (req, res, next) => {
  let params = null
  if (typeof req.body === 'string') {
    params = JSON.parse(req.body)
  } else {
    params = req.body
  }
  let { TrainStartStopNumber, TrainEndStopNumber, TrainRate,
    StartStopId, EndStopId, UserId } = params
  let total = Math.abs(TrainStartStopNumber - TrainEndStopNumber) * TrainRate
  let ticket = { StartStopId, EndStopId, total, UserId }
  ticket.barcodeData = "http://localhost:3000/barcode"
  ticket.status = 'VALID'
  //later: denormalize data a bit by copying train name
  // and id onto ticket, along with station names from stops.
  db.Ticket.create(ticket, {
    include: [{ model: db.Stop, as: 'startStop', include: [db.Station] },
    { model: db.Stop, as: 'endStop', include: [db.Station] }]
  })
    .then(result => res.json(result))
});