var express = require('express');
var path = require('path');
var spaRoute = require('./utils/spa-server-route');
var mongoose = require('mongoose');
var ideaRouter = require('./routes/ideaRoutes');

/* eslint-disable no-unused-vars */
var db = mongoose.connect('mongodb://localhost/idea_1API');
/* eslint-enable no-unused-vars */
var app = express();
/* eslint-disable */
var port = process.env.PORT || 3000;
var root = path.resolve(__dirname, 'public');
/* eslint-enable */
app.use(express.static(root));
app.use('/api/ideas', ideaRouter);
app.use(spaRoute(path.resolve(root, 'index.html')));

app.listen(port, function() {
  /*eslint-disable */
  console.log('server started on port 3000');
  /*eslint-enable */
});
