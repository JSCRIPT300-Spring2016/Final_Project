var express = require('express');
var path = require('path');
var spaRoute = require('./utils/spa-server-route');
var mongoose = require('mongoose');
var houseAPIRouter = require('./routes/houseRoutes');


/*eslint-disable no-unused-vars*/
var db = mongoose.connect('mongodb://localhost/houseAPI');
/*eslint-enable no-unused-vars*/

var app = express();
var port = process.env.PORT || 3000;
var root = path.resolve(__dirname, 'public');

app.use(express.static(root));
app.use('/api/houses', houseAPIRouter);
app.use(spaRoute(path.resolve(root, 'index.html')));

app.listen(port, function () {
  /* eslint-disable no-console */
  console.log('listening on port', port);
  /* eslint-enable no-console */
});