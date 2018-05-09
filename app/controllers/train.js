const express = require('express');
const router = express.Router();
const db = require('../models');
const Op = db.Sequelize.Op
module.exports = (app) => {
  app.use('/trains', router);
};

router.get('/', (req, res, next) => {
    db.Train.findAll().then((articles) => {
        res.render('index', {
        title: 'Generator-Express MVC',
        articles: articles
        });
    });
});

router.get('/:startLocationId/:endLocationId', (req, res, next) => {
    let { startLocationId, endLocationId } = req.params
    db.Stop.findStopsForStartAndEnd(startLocationId, endLocationId)
    .then(stops => {
        let arr = getTrainIdArrayFromStopsArray(stops)
        return db.Train.findTrainsFromIdArray(arr)
    }).then(trains => res.json(trains))
    .catch(err => console.log(err))
});

const getTrainIdArrayFromStopsArray = (stops) => {
    let trainIdArr = []
    for(let i = 0; i < stops.length - 1; i++) {
        if(stops[i].trainId === stops[i+1].trainId) {
            trainIdArr.push(stops[i].trainId)
            stops[i].shift()
            stops[i].shift()
        } else {
            stops[i].shift()
        }
    }
    return trainIdArr
}