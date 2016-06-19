var Backbone = require('backbone');

var plantData = require('../models/plant');
var initialPlants = require('../plants');
var plantListCollection = require('../collections/PlantListCollection');
var plantItemModel = require('../models/plant');

//this should create a list of plants (which feeds into mainController)

module.exports = Backbone.View.extend({
  tagName: 'li',
  template: TFT.plantItem,
  // model: 'plant',
  events: {},
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  render: function() {
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  },
  showSoonToPlantPlants: function() {
    this.$el.html('<p>Make the plants go here</p>');
  }
});
