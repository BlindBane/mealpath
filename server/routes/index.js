const express = require('express');
const mealsApi = require('./meals');
const router = express.Router();

router.use('/meals', mealsApi);

module.exports = router;
