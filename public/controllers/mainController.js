var Header = require('../views/header');
var FormView = require('../views/FormView');
var plantModel = require('../models/plant');
var PlantListView = require('../views/plantListView');
// var plants = require('../../plants');

var header = new Header();
var formView = new FormView();

module.exports = {
  showHome: function() {
    console.log('you should see the header');
    header.render();
    formView.render();
    plants.each(function(plant) {
      var view = new PlantListView({ model: plant });
      this.$('#list-of-plants').append(view.render().el);
    }, this);
  }
};
