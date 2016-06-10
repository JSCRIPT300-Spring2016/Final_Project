var Header = require('../views/header');
var FormView = require('../views/FormView');
var PlantListView = require('../views/plantListView');

var header = new Header();
var formView = new FormView();
var plantListView = new PlantListView();

module.exports = {
  showHome: function() {
    console.log('you should see the header');
    header.render();
    formView.render();
    plantListView.render();
  }
}
