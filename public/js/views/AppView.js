/* global location */

"use strict";

var Backbone = require("backbone");
var NavView = require("./NavView");
var AppRouter = require("../routers/AppRouter");
var appController = require("../controllers/AppController");
var vent = require("../events/Vent");

module.exports = Backbone.View.extend({
	events: {
		"click .logo__link": "showHome"
	},
	initialize: function () {
/* eslint-disable no-unused-vars */
		var navView = new NavView({ el: "#nachosNav" });
/* eslint-enable no-unused-vars */
		var navigationEvents = ["allNachos", "allRatings", "nachos", "rating", "home"];

		this.appRouter = new AppRouter({ appController: appController });

		// make sure the navigateSelected function gets the current
		// Backbone.View extended object *not* the browser Window object
		// normally would be the browser Window object because that would
		// be the source of the event
		this.navigateSelected = this.navigateSelected.bind(this);
		navigationEvents.forEach(function (event) {
			vent.on(event + ":selected", this.navigateSelected);
		}, this);

		Backbone.history.start({ pushState: true });
	},
	showHome: function (ev) {
		ev.preventDefault();
		// replace the origin with an empty string so we don't reload the entire page,
		// just the specified page/event/path
		var path  = ev.currentTarget.href.replace(location.origin, "");

		vent.trigger("home:selected", { path: path });
	},
	navigateSelected: function (options) {
		this.appRouter.navigate(options.path);
	}
});
