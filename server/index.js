'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const api = require('./routes');

const app = express();

app.use(helmet());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api', api);

module.exports = app;
