//Express Node Server

var express = require('express');
var houseRouter = require('./routes/houseRoutes'); 
var mongoose = require('mongoose');

/*eslint-disable no-unused-vars*/
var db = mongoose.connect('mongodb://localhost/houseAPI');
/*eslint-enable no-unused-vars*/

var app = express();

app.use(express.static('public'));
app.use('/api/houses', houseRouter);

app.listen(3000, function () {
  /* eslint-disable no-console */
  console.log('listening on port 3000');
  /* eslint-enable no-console */
});