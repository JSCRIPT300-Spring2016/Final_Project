'use strict';

var express = require('express');
var bodyparser = require('body-parser');

var bands = require('../bands');

var urlEncoded = bodyparser.urlencoded({ extended: false });

var router = express.Router();

router.route('/')
	.get(function (request, response) {
		var bandList = bands.getBands();

    response.send(bandList);
  });

router.route('/:name')
  .get(function (request, response) {
    var band = bands.getBand(request.params.name);
    
  response.send(band);
});

router.route('/:genre')
  .get(function (request, response) {
    var band = bands.getBandByGenre(request.params.genre);

  response.send(band);
});

module.exports = router;



