/* global TFT */

"use strict";

var Backbone = require("backbone");

module.exports = Backbone.View.extend({
	className: "nachosDetail",
	template: TFT.nachos,
	render: function () {
		this.$el.append(this.template(this.model.toJSON()));

		return this;
	}
});