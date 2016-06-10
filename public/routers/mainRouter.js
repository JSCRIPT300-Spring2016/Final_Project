var Backbone = require('backbone');
var header = require('../views/header');

module.exports = Backbone.Router.extend({
  el: '#header',
  routes: {
    '': 'home'
  },
  initialize: function(options) {
    console.log('initialized main router');
    options || {};
    this.mainController = options.mainController;
    this.mainController.showHome();
  }
});
