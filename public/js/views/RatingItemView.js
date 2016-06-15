/* global TFT location */

"use strict";

var Backbone = require("backbone");
var vent = require("../events/Vent");

module.exports = Backbone.View.extend({
	tagName: "li",
	className: "ratingList__item",
	template: TFT.ratingListItem,
	initialize: function (options) {
		if (options) {
			this.rating = options.rating;
		}
	},
	events: {
		"click a": "handleClick"
	},
	render: function () {
		var data = { rating: this.rating };

		this.$el.append(this.template(data));

		return this;
	},
	handleClick: function (ev) {
		ev.preventDefault();
		var path  = ev.currentTarget.href.replace(location.origin, "");

		vent.trigger("rating:selected", { rating: this.rating, path: path });
	}
});
