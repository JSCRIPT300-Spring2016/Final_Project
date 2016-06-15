"use strict";

var ResultsView = require("../views/ResultsView");
var Nachos = require("../collections/Nachos");
var vent = require("../events/Vent");

var nachos = new Nachos();
var resultsView = new ResultsView({ el: "#results", collection: nachos });
// use jqxhr so we can start the fetch now and not have to wait for it
// jqxhr is a jquery promise object, returned by the jquery ajax function
var jqxhr = nachos.fetch();

vent.on("allNachos:selected", showAllNachos);
vent.on("allRatings:selected", showAllRatings);
vent.on("rating:selected", showNachosByRating);
vent.on("nachos:selected", showNachos);
vent.on("home:selected", showHome);

// use jqxhr.done() so we know the fetch (on the food trucks collection) is done
// before trying to use the results
// the ResultsView uses the food trucks collection directly

function showHome() {
	jqxhr.done(function () {
		resultsView.showHome();
	});
}

function showAllNachos() {
	jqxhr.done(function () {
		resultsView.showAllNachos();
	});
}

function showNachos(options) {
	var model = options.model;

	jqxhr.done(function () {
		if (options.name) {
			model = nachos.findWhere({ name: options.name });
		}
		resultsView.showNachos(model);
	});
}

function showAllRatings() {
	jqxhr.done(function () {
		resultsView.showAllRatings();
	});
}

function showNachosByRating(options) {
	jqxhr.done(function () {
		resultsView.showNachosByRating(options.rating);
	});
}

module.exports = {
	showHome: showHome,
	showAllNachos: showAllNachos,
	showNachos: showNachos,
	showAllRatings: showAllRatings,
	showNachosByRating: showNachosByRating
};
