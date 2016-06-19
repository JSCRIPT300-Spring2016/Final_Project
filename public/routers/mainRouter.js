var Backbone = require('backbone');
var header = require('../views/header');

module.exports = Backbone.Router.extend({
  routes: {
    '(/)': 'home',
    // '*path': 'noMatch',
    // '/alert(/)': 'alAlarm'
    'planting': 'soonToPlantList',
    'harvesting': 'soonToHarvestList'
  },
  initialize: function(options) {
    console.log('initialized main router');
    options || {};
    this.mainController = options.mainController;
  },
  home: function() {
    this.mainController.showHome();
    this.mainController.allPlants();
  },
  soonToPlantList: function() {
    this.mainController.showHome();
    this.mainController.showSoonToPlantPlants();
  }
});
