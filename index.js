'use strict';
var express = require('express');
var mongoose = require('mongoose');
var bands = require ('./bands');

var bandRouter = require('./routes/bandRoutes');
var genreRouter = require('./routes/genreRoutes');
//connect to my local db
mongoose.connect('mongodb://localhost/bandAPI');

var app = express();

app.use(express.static('public'));

//returns list of all bands
app.use('/bands', bandRouter);

app.use('/genre', genreRouter);



/*//returns list of all genres
app.get('/genres', function(request, response){
  var bandList = bands.getGenres();

  response.send(bandList);
});

app.get('/genre/:genre', function(request, response) {
  var genre = request.params.genre;
  var bandList = bands.filterByGenre(genre);

  response.send(bandList);
});*/

app.get('*', function(request, response) {

  response.send('Hey there! Sorry, your page could not be found.');
});


app.listen(3000, function () {
  console.log('server started on port 3000');
});