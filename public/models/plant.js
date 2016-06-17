var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/',
  defaults: {
    name: '',
    datePlanted: null,
    dateHarvested: null,
    number: null,
    spaceNeededPerPlant: null
  },
  initialize: function() {
    this.set('totalSpaceNeeded', this.attributes.number * this.attributes.spaceNeededPerPlant);
  }
});
