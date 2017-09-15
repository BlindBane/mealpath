const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'All Meals' });
});

router.get('/:id', function(req, res) {
  res.json({ message: `You requested info about meal id: ${req.params.id}` });
});

module.exports = router;
