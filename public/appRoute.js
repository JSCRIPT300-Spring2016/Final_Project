'use strict';

module.exports = Backbone.Router.extend({
  routes: {
    '': 'showHome',
    'help': 'showHelp',
  },
  initialize: function (options) {
    options || {};
    this.appController = options.appController;
  },
  home: function () {
    this.appController.showHome();
  },
});