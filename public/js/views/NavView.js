/* global location */

"use strict";

var Backbone = require("backbone");
var vent = require("../events/Vent");

module.exports = Backbone.View.extend({
	events: {
		"click #allNachos": "handleAllNachos",
		"click #allRatings": "handleAllRatings"
	},
	handleAllNachos: function (ev) {
		ev.preventDefault();
		var path  = ev.currentTarget.href.replace(location.origin, "");

		vent.trigger("allNachos:selected", { path: path });
	},
	handleAllRatings: function (ev) {
		ev.preventDefault();
		var path  = ev.currentTarget.href.replace(location.origin, "");

		vent.trigger("allRatings:selected", { path: path });
	}
});
