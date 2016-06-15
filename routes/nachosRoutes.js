/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

var express = require("express");
var bodyParser = require("body-parser");

// Apply body-parser URL encoder middle-ware for just the POST and PUT routes, not the GET route.
var urlEncoded = bodyParser.urlencoded({ extended: false });

// Nachos is the Mongoose model we'll use for our data
var Nachos = require("../models/nachosModel");

var router = express.Router();

router.route("/")
	.get(function (request, response) {
		Nachos.find(function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.status(200).json(results);
			}
		});
	})
	.post(urlEncoded, function (request, response) {
		var nachos = new Nachos(request.body);

		if (nachos) {
			nachos.save(function (error, result) {
				if (error) {
					response.status(500).send(error);
				} else {
					response.status(201).json(result);
				}
			});
		} else {
			response.status(500).send("Unable to add a new nachos entry.");
		}
	});

router.route("/:id")
	.get(function (request, response) {
		var nachosId = request.params.id;

		Nachos.findById(nachosId, function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.status(200).json(results);
			}
		});
	})
	.put(urlEncoded, function (request, response) {
		var nachosId = request.params.id;
		var update = {
			name: request.body.name,
			date: request.body.date,
			city: request.body.city,
			rating: request.body.rating,
			sides: request.body.sides,
			comments: request.body.comments
		};

		Nachos.findByIdAndUpdate(nachosId, update, function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.status(200).json(results);
			}
		});
	})
	.delete(function (request, response) {
		var nachosId = request.params.id;

		Nachos.findByIdAndRemove(nachosId, function (error, _results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.status(204).send("Removed");
			}
		});
	});

module.exports = router;
