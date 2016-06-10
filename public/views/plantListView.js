var Backbone = require('backbone');

var plantData = require('../models/plant');
var initialPlants = require('../plants');
var plantListCollection = require('../collections/PlantListCollection');
var plantItemModel = require('../models/plant');

//this should create a list of plants (which feeds into mainController)

module.exports = Backbone.View.extend({
  tagName: 'li',
  // model: 'plant',
  events: {},
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  render: function() {
    this.$el.html(this.model.get('name') + '<ul><li>Number of plants: ' + this.model.get('number') + '</li> <li>Space per plant: ' + this.model.get('spaceNeededPerPlant') + '</li> <li>Total space needed: ' + this.model.get('totalSpaceNeeded') + '</li></ul>');
    return this;
  }
});
 // add in later:
 //  + '</li> <li>Date planted: ' + this.model.get('datePlanted') + '</li> <li>Date harvested: ' + this.model.get('dateHarvested') +
