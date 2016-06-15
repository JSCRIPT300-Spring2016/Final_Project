"use strict";

var _ = require("lodash");
var Backbone = require("backbone");
var Nachos = require("../models/Nachos");

module.exports = Backbone.Collection.extend({
	model: Nachos,
	url: "/api/nachos",
	getRatings: function () {
		return _.uniq(_.flatten(this.map(function (model) {
			return model.get("rating");
		})));
	},
	getNachosByRating: function (rating) {
		return this.filter(function (model) {
			return model.get("rating") === rating;
		});
	}
});
