"use strict";
var Backbone = require("backbone");

module.exports = Backbone.Router.extend({
	routes: {
		"": "home",
		"nachos": "showAllNachos",
		"nachos/:name": "showNachos",
		"ratings": "showAllRatings",
		"ratings/:rating": "showNachosByRating"
	},
	initialize: function (options) {
		options || {};
		this.appController = options.appController;
	},
	home: function () {
		this.appController.showHome();
	},
	showAllNachos: function () {
		this.appController.showAllNachos();
	},
	showNachos: function (name) {
		this.appController.showNachos({ name: name });
	},
	showAllRatings: function () {
		this.appController.showAllRatings();
	},
	showNacthosByRating: function (rating) {
		this.appController.showNachosByRating({ rating: rating });
	}
});
