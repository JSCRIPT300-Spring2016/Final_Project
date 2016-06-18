'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  routes: {
    'complete-library': 'showAllReleases'
  },
  initialize: function (options) {
    options || {};
    this.appController = options.appController;
  },
  showAllReleases: function () {
    this.appController.showAllReleases();
  }
});
