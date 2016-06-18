var express = require('express');
var mongoose = require('mongoose');

var countryRoutes = require('./routes/toDoRoutes');

var db = mongoose.connect('mongodb://localhost/toDoAPI');

var app = express();
app.use(express.static('public'));

app.use('/list', countryRoutes);


app.listen(3000, function () {
  console.log('listening on port 3000');
});
