const express = require('express');
const router = express.Router();
const db = require('../models');
const Op = db.Sequelize.Op;

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

router.get('/:startId/:endId', (req, res, next) => {
    let {startId, endId} = req.params
    db.Stop.findAll({
        where: {
            [Op.or]: [{StationId: parseInt(startId)}, {StationId: parseInt(endId)}]
        }
    }).then(stops => {
        let pairs = {}
        //find all valid stop pairs
        stops.map(item => {
          if(!pairs[item.TrainId + ""]) {
              pairs[item.TrainId + ""] = [item]
          } else {
              pairs[item.TrainId + ""].push(item)
          }
        })
        let filteredResults = Object.keys(pairs)
        .filter(key => pairs[key].length > 1)
        let validTrainIdArr = filteredResults.map(item => ({ id: parseInt(item) }))
        return db.Train.find({
            where: {
                [Op.or]: validTrainIdArr
            },
            include: [{
                model: db.Stop,
                include: [{ model: db.Station}]
            }]
        })
    }).then(trains => res.json(trains))
  });



  //delete? refactored^
// router.get('/:startLocationId/:endLocationId', (req, res, next) => {
//     let { startLocationId, endLocationId } = req.params
//     db.Stop.findStopsForStartAndEnd(startLocationId, endLocationId)
//     .then(stops => {
//         let arr = getTrainIdArrayFromStopsArray(stops)
//         return db.Train.findTrainsFromIdArray(arr)
//     }).then(trains => res.json(trains))
//     .catch(err => console.log(err))
// });

// const getTrainIdArrayFromStopsArray = (stops) => {
//     let trainIdArr = []
//     for(let i = 0; i < stops.length - 1; i++) {
//         if(stops[i].trainId === stops[i+1].trainId) {
//             trainIdArr.push(stops[i].trainId)
//             stops[i].shift()
//             stops[i].shift()
//         } else {
//             stops[i].shift()
//         }
//     }
//     return trainIdArr
// }