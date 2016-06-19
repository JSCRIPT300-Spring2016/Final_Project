var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var entryAPIRouter = require('./routes/entryRoutes');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/YelpAPI');

var app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/entries', entryAPIRouter);


app.listen(4000);
console.log('Listening on port 4000');