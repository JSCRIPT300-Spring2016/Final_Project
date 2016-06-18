// var garden = require('../garden');

// have a problem where require doesn't work on client side
// need to replace this somehow--how to tie it in?
// escaped to test out what's happening
// var plantList = [
//   { name: 'lettuce',
//     number: 4,
//     spaceNeeded: .5
//   },
//   { name: 'corn',
//     number: 4,
//     spaceNeeded: .5
//   }
// ];

var ListOfPlants = Backbone.View.extend({
  // el: '#list-of-plants',
  collection: PlantList,
  initialize: function() {
    this.render();
  },
  generatePlantList: function() {
    // to add later: date planted/harvested, etc.
    // PlantList should be coming in from plant.js
    var listElements = _.map(this.collection, function(plant) {
      return '<li>' + plant.name + '<ul><li>Number of plants: ' + plant.number + '</li>' + '<li>Space needed per plant: ' + plant.spaceNeeded  +'</li></ul></li>';
    });
    return '<p>A list!</p>' + listElements;
  },
  render: function() {
    this.$el.html(this.generatePlantList());
  }
});

// var listOfPlants = new ListOfPlants();
