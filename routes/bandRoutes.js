'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var bands = require('../bands');

//this is the model 
var Band = require('../models/bandModel');

var urlEncoded = bodyparser.urlencoded({ extended: false });
var router = express.Router();

//calling to the db via Band.find to get my data and manipulate it
router.route('/')
	.get(function (request, response) {
		Band.find(function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.send(results);
			}
		});
  });

//returns object of one band via their name ie bands/Bonobo from mongodb
router.route('/:name')
	.get(function (request, response) {
		var name = request.params.name;

		Band.find({ name: { $in: [name] }  }, function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.send(results);
			}
		});
	});
	router.route('/:genre')
	.get(function (request, response) {
		var genre = request.params.genre;

		Band.find({ genre: { $in: [genre] }  }, function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.send(results);
			}
		});
	});

module.exports = router;



