var express = require('express');
var path = require('path');
var app = express();
var spaRoute = require('./utils/spa-server-route');
var mongoose = require('mongoose');
var ciderAPIRouter = require('./routes/ciderRoutes');
var reviewAPIRouter = require('./routes/reviewRoutes');
var root = path.resolve(__dirname, 'public');
mongoose.connect('mongodb://localhost/ciderAPI');


app.use(express.static(root));
app.use('/api/ciders', ciderAPIRouter);
app.use('/api/reviews', reviewAPIRouter);
app.use(spaRoute(path.resolve(root, 'index.html')));

app.listen(3000, function(){
  /* eslint-disable no-console */
  console.log('listening on port 3000!');
  /* eslint-enable no-console */
});