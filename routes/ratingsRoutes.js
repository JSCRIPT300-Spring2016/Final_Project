/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

var express = require("express");

// Nachos is the Mongoose model we'll use for our data
var Nachos = require("../models/nachosModel");

// the Router method returns an instance which can be mounted as middle-ware
var router = express.Router();

// the path we mount the router on is relative to where it was mounted in app.js
router.route("/:rating")
	.get(function (request, response) {
		// get a list of names for the given rating
		var ratingParam = request.params.rating;

		Nachos.find(
			{ rating: { $eq: ratingParam } },
			function (error, results) {
				if (error) {
					response.status(404).send("No nachos found with rating " +
						ratingParam + ".");
				} else {
					var nameList = "Nachos with rating " + ratingParam + ":<br><br>";

					// results is a list of nachos objects, sort by name
					results.sort(function (a, b) {
						return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
					});
					for (var i = 0; i < results.length; ++i) {
						nameList += results[i].name + "<br>";
					}
					response.send(nameList);
				}
			});
	});

module.exports = router;
