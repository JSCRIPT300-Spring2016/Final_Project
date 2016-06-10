var Backbone = require('backbone');

var initialPlants = require('../../plants');
var plant = require('../models/plant');

module.exports = Backbone.View.extend({
  tagName: 'li',
  events: {},
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  render: function() {
    this.$el.html(this.model.get('name') + '<ul><li>Number of plants: ' + this.model.get('number') + '</li> <li>Space per plant: ' + this.model.get('spaceNeededPerPlant') + '</li> <li>Total space needed: ' + this.model.get('totalSpaceNeeded') + '</li> <li>Date planted: ' + this.model.get('datePlanted') + '</li> <li>Date harvested: ' + this.model.get('dateHarvested') + '</li></ul>');
    return this;
  }
});
