var express = require('express');
var mongoose = require('mongoose');
var releasesRoutes = require('./routes/releasesRoutes.js');

var app = express();
var port = process.env.PORT || 3000;

var db = mongoose.connect('mongodb://localhost/releasesApi');

app.use(express.static('public'));

app.use('/', releasesRoutes);

app.use('/complete-library', releasesRoutes);

app.use('/all-art', releasesRoutes);

app.listen(port, function () {
  console.log('listening on port ', port);
});