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
eventHandler.on('soonToHarvest', showSoonToHarvestPlants);

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
  console.log('made it to the controller');
  var plantCollection = new PlantListCollection();
  console.log('if we got any plants from the server, they should print in the console now');
  console.log(plantCollection);
  // plantCollection.reset(plants);
  _(plantCollection.models).each(function(plant) {
    var view = new PlantListView({ model: plant });
    $('#list-of-plants').html(view.render().el);
  });
}

function showSoonToHarvestPlants() {
  var plantCollection = new PlantListCollection();
  console.log('if we got any plants from the server, they should print in the console now');
  console.log(plantCollection);

  // plantCollection.reset(plants);
  _(plantCollection.models).each(function(plant) {
    var view = new PlantListView({ model: plant });
    $('#list-of-plants').html(view.render().el);
  });
}

module.exports = {
  showHome: showHome,
  allPlants: allPlants,
  showSoonToPlantPlants: showSoonToPlantPlants,
  showSoonToHarvestPlants: showSoonToHarvestPlants
}
