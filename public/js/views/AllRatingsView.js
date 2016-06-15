/* global TFT */

"use strict";

var Backbone = require("backbone");
var RatingItemView = require("./RatingItemView");

module.exports = Backbone.View.extend({
	className: "allRatingsList",
	template: TFT.ratings,
	_children: [],
	initialize: function () {
		this.ratings = this.collection.getRatings();
		this.ratings.sort();
	},
	render: function () {
		this.$el.append(this.template());
		this.ratings.forEach(function (rating) {
			var itemView = new RatingItemView({ rating: rating });

			this._children.push(itemView);
			this.$(".ratingsList").append(itemView.render().el);
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