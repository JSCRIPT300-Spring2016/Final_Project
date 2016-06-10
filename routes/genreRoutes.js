'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var bands = require('../bands');

var Band = require('../models/bandModel');
var urlEncoded = bodyparser.urlencoded({ extended: false });
var router = express.Router();


//returns the genre array at /genre
router.route('/')
	.get(function (request, response) {
		Band.distinct('genre', function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.send(results);
			}
	});
});
//returns all bands that fall within this genre at /genre/genreName
router.route('/:genreName')
	.get(function (request, response) {
		var genre = request.params.genreName;

		Band.find({ genre: { $in: [genre] }  }, function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.send(results);
			}
		});
	});

module.exports = router;
