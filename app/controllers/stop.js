const express = require('express');
const router = express.Router();
const db = require('../models');
const Op = db.Sequelize.Op
module.exports = (app) => {
  app.use('/route', router);
};


//find stops available from start/end
router.get('/:startId/:endId', (req, res, next) => {
  let {startId, endId} = req.params
  db.Stop.find({
      where: {
        // op.or stationID == startID or endID
      }
  }).then(stops => {
      let pairs = {}
      stops.map(item => {
        if(!pairs[item.trainId + ""]) {
            pairs[item.trainId + ""] = [item]
        } else {
            pairs[item.trainId + ""].push(item)
        }
      })
      return pairs
  }).then(pairs => res.json(pairs))
});