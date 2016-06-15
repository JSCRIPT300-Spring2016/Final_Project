/* global TFT */

"use strict";

var Backbone = require("backbone");
var NachosItemView = require("./NachosItemView");

module.exports = Backbone.View.extend({
	className: "allNachosList",
	template: TFT.allNachos,
	_children: [],	// keep track of children so we can make sure all child
					// views are removed when we remove this view, backbone will not do this for us
	render: function () {
		this.$el.append(this.template());
		this.collection.each(function (model) {
			var itemView = new NachosItemView({ model: model });

			this._children.push(itemView);	// keep track of child views
			this.$(".nachosList").append(itemView.render().el);
		}, this);

		return this;
	},
	// override remove so we can remove all child views before removing this view
	remove: function () {
		this._children.forEach(function (view) {
			view.remove();
		});
		Backbone.View.prototype.remove.call(this);
	}
});
