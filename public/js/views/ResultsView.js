'use strict';

var Backbone = require('backbone');
var HousesView = require('./HousesView');
var HouseView = require('./HouseView');
//var HouseItemView = require('./HouseItemView');
var AddHouseView = require('./AddHouseView');
//var Houses = require('../collections/Houses');


var ResultsView = Backbone.View.extend({
  initialize: function () {
    this.showHome();
  },
  showAllHouses: function () {
    if (this.resultsView) {
      this.resultsView.remove();
    }

    this.resultsView = new HousesView({ collection: this.collection });
    this.$el.append(this.resultsView.render().el);
	
  },
  showHouse: function (model) {
    if (this.resultsView) {
      this.resultsView.remove();
    }
		
    if (model) {
      this.resultsView = new HouseView({ model: model });
      this.$el.append(this.resultsView.render().el);
    }
  },
  showAddForm: function() {
    if (this.resultsView) {
      this.resultsView.remove();
    }
    this.resultsView = new AddHouseView();
    this.$el.append(this.resultsView.render().el);
  },
  showHome: function () {
    if (this.resultsView) {
      this.resultsView.remove();
    }
  }
});

module.exports = ResultsView;