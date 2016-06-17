'use strict';

var ResultsView = require('../views/ResultsView');
var Houses = require('../collections/Houses');
var vent = require('../events/Vent');

var houses = new Houses();
var resultsView = new ResultsView({ el: '#results', collection: houses });
var jqxhr = houses.fetch();

//Events to listen to:
vent.on('allHouses:selected', showAllHouses);
vent.on('addHome:selected', showAddForm);
vent.on('house:selected', showHouse);
vent.on('home:selected', showHome);
vent.on('deleteHouse:selected', deleteHouse);

//callback functions depending on event:
function showHome() {
  jqxhr.done(function () {
    resultsView.showHome();
  });
}

function showAllHouses() {
  jqxhr.done(function () {
    resultsView.showAllHouses();
  });
}

function showHouse(options) {
  var model = options.model;

  jqxhr.done(function () {
    if (options.street) {
      model = houses.findWhere({ street: options.street });
    }
    resultsView.showHouse(model);
  });
}

function deleteHouse(options) {
  var model = options.model;

  jqxhr.done(function () {
    model = houses.findWhere({ _id: model.id });
	//removes it from client collection only
    houses.remove(model);
	
	//removes it from server
	//model.destroy();
    resultsView.showAllHouses();
  });
}

function showAddForm() {
  jqxhr.done(function () {
    resultsView.showAddForm();
  });
}

module.exports = {
  showHome: showHome,
  showAllHouses: showAllHouses,
  showHouse: showHouse,
  showAddForm: showAddForm,
  deleteHouse: deleteHouse
};