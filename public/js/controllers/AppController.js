'use strict';

var ResultsView = require('../views/ResultsView');
var FoodTrucks = require('../collections/FoodTrucks');
var vent = require('../events/Vent');

var foodTrucks = new FoodTrucks();
var resultsView = new ResultsView({ el: '#results', collection: foodTrucks });
var jqxhr = foodTrucks.fetch();

vent.on('allTrucks:selected', showAllFoodTrucks);
vent.on('foodTypes:selected', showAllFoodTypes);
vent.on('today:selected', showFoodTrucksToday);
vent.on('foodType:selected', showFoodTrucksByFoodType);
vent.on('foodTruck:selected', showFoodTruck);
vent.on('home:selected', showHome);
vent.on('allProps:selected', showAllProps);
vent.on('mdfProps:selected', showMdfProps);
vent.on('dueThisWeek:selected', showDueThisWeek);

function showHome() {
  jqxhr.done(function () {
    resultsView.showHome();
  });
}

function showAllFoodTrucks() {
  jqxhr.done(function () {
    resultsView.showAllFoodTrucks();
  });
}

function showAllProps() {
  jqxhr.done(function () {
    resultsView.showAllProps();
  });
}

function showFoodTruck(options) {
  var model = options.model;

  jqxhr.done(function () {
    if (options.name) {
      model = foodTrucks.findWhere({ name: options.name });
    }
    resultsView.showFoodTruck(model);
  });
}

function showAllFoodTypes() {
  jqxhr.done(function () {
    resultsView.showAllFoodTypes();
  });
}

function showFoodTrucksByFoodType(options) {
  jqxhr.done(function () {
    resultsView.showFoodTrucksByFoodType(options.type);
  });
}

function showFoodTrucksToday() {
  jqxhr.done(function () {
    resultsView.showFoodTrucksToday();
  });
}

function showMdfProps() {
  jqxhr.done(function () {
    resultsView.showMdfProps();
  });
}

function showDueThisWeek() {
  jqxhr.done(function () {
    resultsView.showDueThisWeek();
  });
}

module.exports = {
  showHome: showHome,
  showAllFoodTrucks: showAllFoodTrucks,
  showFoodTruck: showFoodTruck,
  showAllFoodTypes: showAllFoodTypes,
  showFoodTrucksByFoodType: showFoodTrucksByFoodType,
  showFoodTrucksToday: showFoodTrucksToday,
  showAllProps: showAllProps,
  showMdfProps: showMdfProps,
  showDueThisWeek: showDueThisWeek
};
