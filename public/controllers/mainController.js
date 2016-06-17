var _ = require('underscore');

var Header = require('../views/header');
var FormView = require('../views/FormView');
var plantModel = require('../models/plant');
var PlantListView = require('../views/plantListView');
var PlantListCollection = require('../collections/PlantListCollection');
var plants = require('../plants');

var header = new Header();
var formView = new FormView();

module.exports = {
  showHome: function() {
    console.log('you should see the header');
    header.render();
    formView.render();
  },

  allPlants: function() {
    var that = this;
    var plantCollection = new PlantListCollection();
    plantCollection.reset(plants);
    _(plantCollection.models).each(function(plant) {
      var view = new PlantListView({ model: plant });
      $('#list-of-plants').append(view.render().el);
    });
  },

  showSoonToPlantPlants: function() {
    console.log('we are trying to list plants to plant soon');
    //this is not producing a list of plants from the plant list
    var plantCollection = new PlantListCollection();
    console.log(plantCollection);
  }
}
