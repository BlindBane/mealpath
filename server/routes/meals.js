const express = require('express');
const router = express.Router();

const mealData = require('../data.json');

router.get('/', function(req, res) {
  res.json({ meals: mealData });
});

router.get('/:id', function(req, res) {
  res.json({ message: `You requested info about meal id: ${req.params.id}` });
});

module.exports = router;
