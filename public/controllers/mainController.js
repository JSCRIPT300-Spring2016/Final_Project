var _ = require('underscore');

var Header = require('../views/header');
var Buttons = require('../views/ButtonView');
var eventHandler = require('../events/eventHandler');
var FormView = require('../views/FormView');
var plantModel = require('../models/plant');
var PlantListView = require('../views/plantListView');
var PlantListCollection = require('../collections/PlantListCollection');
var plants = require('../plants');

var header = new Header();
var buttons = new Buttons();
// var formView = new FormView();

eventHandler.on('soonToPlant', showSoonToPlantPlants);

function showHome() {
  console.log('you should see the header');
  header.render();
  buttons.render();
  // formView.render();
}

function allPlants() {
  var that = this;
  var plantCollection = new PlantListCollection();
  plantCollection.reset(plants);
  _(plantCollection.models).each(function(plant) {
    var view = new PlantListView({ model: plant });
    $('#list-of-plants').append(view.render().el);
  });
}

function showSoonToPlantPlants() {
  PlantListView.showSoonToPlantPlants();
  // console.log('we are trying to list plants to plant soon');
  //this is not producing a list of plants from the plant list
  // var plantCollection = new PlantListCollection();
  // console.log(plantCollection);
}

module.exports = {
  showHome: showHome,
  allPlants: allPlants,
  showSoonToPlantPlants: showSoonToPlantPlants
}
