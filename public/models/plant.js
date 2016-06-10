var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/',
  defaults: {
    name: '',
    datePlanted: null,
    dateHarvested: null,
    number: 1,
    spaceNeededPerPlant: .5,
    totalSpaceNeeded: this.number * this.spaceNeededPerPlant
  }
});
