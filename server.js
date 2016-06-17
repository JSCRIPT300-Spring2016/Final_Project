var express = require('express');

var mongoose = require('mongoose');

var rcCollectionRouter = require('./rcCollectionroutes');

var rcRecordRouter = require('./rcRecordroutes');

var app = express();

var db = mongoose.connect('mongodb://localhost/reCollector');

app.use(express.static('public'));

app.use('/rcCollection', rcCollectionRouter);

app.use('/rcRecord', rcRecordRouter);


app.listen(3000, function(){
  console.log('listening');
});