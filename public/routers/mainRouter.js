var Backbone = require('backbone');
var header = require('../views/header');

module.exports = Backbone.Router.extend({
  routes: {
    '(/)': 'home',
    '*path': 'noMatch',
    '/alert(/)': 'alAlarm'
  },
  initialize: function(options) {
    console.log('initialized main router');
    options || {};
    this.mainController = options.mainController;
    this.mainController.showHome();
    //this should be in home
    // this.mainController.allPlants();
  },
  alAlarm: function() {
    alert('oh it works!');
  },
  noMatch: function(){
    console.log('no matching url');
  },
  home: function() {
    console.log('a new route!');
    //this should be working but isn't
    this.mainController.allPlants();
  }
});
