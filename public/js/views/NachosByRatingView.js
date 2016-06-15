/* global TFT */

"use strict";

var Backbone = require("backbone");
var NachosItemView = require("./NachosItemView");

module.exports = Backbone.View.extend({
	tagName: "li",
	className: "nachosList",
	template: TFT.nachosByRating,
	_children: [],
	initialize: function (options) {
		if (options) {
			this.rating = options.rating;
		}
	},
	render: function () {
		var data = { location: this.location };

		this.$el.append(this.template(data));
		this.collection.each(function (model) {
			var itemView = new NachosItemView({ model: model });

			this._children.push(itemView);
			this.$(".nachosList").append(itemView.render().el);
		}, this);

		return this;
	},
	remove: function () {
		this._children.forEach(function (view) {
			view.remove();
		});
		Backbone.View.prototype.remove.call(this);
	}
});