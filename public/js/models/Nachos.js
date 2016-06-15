"use strict";

var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
	idAttribute: "_id",
	urlRoot: "/api/nachos",
	defaults: {
		sides: [],
		comments: ""
	}
});
