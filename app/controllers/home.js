const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  res.json({})
});

router.get('/barcode', (req, res, next) => {
  res.render('index');
})
