var express = require('express');
var rcRecords = require('./rcRecords.js');

var app = express();

app.get('/', function(request, response){
  response.send('Hello');
});

app.listen(3000, function(){
  console.log('listening');
});