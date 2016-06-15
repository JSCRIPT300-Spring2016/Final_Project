"use strict";

var Backbone = require("backbone");

var AllNachosView = require("./AllNachosView");
var AllRatingsView = require("./AllRatingsView");
var NachosByRatingView = require("./NachosByRatingView");
var NachosView = require("./NachosView");

var Nachos = require("../collections/Nachos");

module.exports = Backbone.View.extend({
	initialize: function () {
	},
	showAllNachos: function () {
		if (this.listView) {
			this.listView.remove();
		}
		this.listView = new AllNachosView({ collection: this.collection });
		this.$el.append(this.listView.render().el);
	},
	showAllRatings: function () {
		if (this.listView) {
			this.listView.remove();
		}
		this.listView = new AllRatingsView({ collection: this.collection });
		this.$el.append(this.listView.render().el);
	},
	showNachosByRating: function (rating) {
		var filteredNachos;

		if (this.listView) {
			this.listView.remove();
		}

		if (rating) {
			filteredNachos = new Nachos(this.collection.getNachosByRating(rating));
			this.listView = new NachosByRatingView({ collection: filteredNachos, rating: rating });
			this.$el.append(this.listView.render().el);
		}
	},
	showNachos: function (model) {
		if (this.listView) {
			this.listView.remove();
		}

		if (model) {
			this.listView = new NachosView({ model: model });
			this.$el.append(this.listView.render().el);
		}
	},
	showHome: function () {
		if (this.listView) {
			this.listView.remove();
		}
	}
});
