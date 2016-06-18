var Backbone = require('backbone');
var dateFormat = require('dateformat');

module.exports = Backbone.Model.extend({
  urlRoot: '/api/garden',
  defaults: {
    name: '',
    datePlanted: null,
    dateHarvested: null,
    number: null,
    spaceNeededPerPlant: null
  },
  initialize: function() {
    this.set('totalSpaceNeeded', this.attributes.number * this.attributes.spaceNeededPerPlant);
    this.set('datePlantedFormatted', dateFormat(this.attributes.datePlanted, 'mmmm dS, yyyy'));
    this.set('dateHarvestedFormatted', dateFormat(this.attributes.dateHarvested, 'mmmm dS, yyyy'));
  }
});
