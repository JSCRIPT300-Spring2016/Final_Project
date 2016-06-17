var Backbone = require('backbone');
var dateFormat = require('dateformat');
// https://www.npmjs.com/package/dateformat

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
    var datePlanted = new Date(this.model.get('datePlanted'));
    var dateHarvested = new Date(this.model.get('dateHarvested'));
    this.$el.html(this.model.get('name') + '<ul><li>Number of plants: ' + this.model.get('number') + '</li> <li>Space per plant: ' + this.model.get('spaceNeededPerPlant') + ' sq. ft.</li> <li>Total space needed: ' + this.model.get('totalSpaceNeeded') + ' sq. ft.</li> <li>Date planted: ' + dateFormat(this.model.get('datePlanted')) + '</li> <li>Date harvested: ' + this.model.get('dateHarvested') + '</li></ul>');
    return this;
  }
});
