var Backbone = require('backbone');

// var Plant = Backbone.Model.extend({
//   urlRoot: '/',
//   defaults: {
//     name: '',
//     datePlanted: null,
//     dateHarvested: null,
//     number: 1,
//     spaceNeededPerPlant: .5,
//     totalSpaceNeeded: this.number * this.spaceNeededPerPlant
//   }
// });
//
// var PlantListModel = Backbone.Collection.extend({
//   url: '/plants',
//   model: Plant
// });
//
// var lettuce = new Plant({ name: 'lettuce', number: 4, spaceNeeded: .5 });
// var corn = new Plant({ name: 'corn', number: 4, spaceNeeded: .5 });
//
// PlantList = new PlantListModel([ lettuce, corn ]);

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
