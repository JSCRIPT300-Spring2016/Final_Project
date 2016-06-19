/*
** author: Fulin Shen
** created on: June 12, 2016
** description:
**/

var express = require('express');
var mongoose = require('mongoose');
var inventoryRouter = require('./routes/inventoryRoutes');
var statusRouter = require('./routes/statusRoutes');

var app = express();
var locationsDB = mongoose.connect('mongodb://localhost/inventoryLocAPI');

app.use(express.static('public'));
app.use('/locations', inventoryRouter);
app.use('/status', statusRouter);

app.listen(3000, function() {
  console.log('listening on port 3000');
});
