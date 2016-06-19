// model: https://github.com/ccoenraets/nodecellar/blob/e249ca3be83e75a26710d81ce5ad95c3404f78d5/public/js/main.js
var Backbone = require('backbone');

// var mainRouter = require('./routers/mainRouter');
// var mainController = require('./controllers/mainController');

var $ = require('jquery');
$(function () {
  // this.mainRouter = new mainRouter({ mainController: mainController });
  // Backbone.history.start({ pushState: true });
  // Backbone.history.start();
  var MainView = require('./views/MainView');
  var mainView = new MainView({ el: 'body' });
});

// var Backbone = require('backbone');
//
// $(function() {
//   var Plant = Backbone.Model.extend({
//     // urlRoot: '/',
//     defaults: {
//       name: '',
//       datePlanted: null,
//       dateHarvested: null,
//       number: 1,
//       spaceNeededPerPlant: .5,
//       totalSpaceNeeded: this.number * this.spaceNeededPerPlant
//     }
//   });
//
//   var PlantListModel = Backbone.Collection.extend({
//     // url: '/plants',
//     model: Plant
//   });
//
//   var plantList = new PlantListModel([
//     new Plant({ name: 'lettuce', number: 4, spaceNeededPerPlant: .5, datePlanted: new Date(2016, 5, 10), dateHarvested: new Date(2016, 8, 15) }),
//     new Plant({ name: 'corn', number: 4, spaceNeededPerPlant: .5, datePlanted: new Date(2016, 6, 5), dateHarvested: new Date(2016, 8, 2) })
//   ]);
//
//   var PlantListView = Backbone.View.extend({
//     tagName: 'li',
//     events: {},
//     initialize: function() {
//       this.model.on('change', this.render, this);
//     },
//     render: function() {
//       this.$el.html(this.model.get('name') + '<ul><li>Number of plants: ' + this.model.get('number') + '</li> <li>Space per plant: ' + this.model.get('spaceNeededPerPlant') + '</li> <li>Total space needed: ' + this.model.get('totalSpaceNeeded') + '</li> <li>Date planted: ' + this.model.get('datePlanted') + '</li> <li>Date harvested: ' + this.model.get('dateHarvested') + '</li></ul>');
//       return this;
//     }
//   });
//
//   //need to make a second list of plants that are in the ground/about to plant/etc.
//
//   //turn form into a view so you can do updates
//
//   //how do you add to collection?
//
//   var App = Backbone.View.extend({
//     el: $(document),
//     initialize: function() {
//       this.list = $('#list-of-plants');
//       plantList.on('change', this.render, this);
//       plantList.each(function(plant) {
//         var view = new PlantListView({ model: plant });
//         this.list.append(view.render().el);
//       }, this);
//     },
//     render: function() {
//       return this;
//     }
//   });
//   new App();
// });
// var AppRouter = Backbone.Router.extend({
//   routes: {
//     '' : 'home',
//     '/:name' : 'editPlant'
//   },
//
//   initialize: function() {
//     this.header = new Header();
//     $('#header').html(this.header.el);
//   },
//
//   home: function() {
//     this.listOfPlants = new ListOfPlants();
//     this.listOfPlants.render();
//     $('#list-of-plants').html(this.listOfPlants.el);
//   }
// });
//
// var app_router = new AppRouter;
//
// Backbone.history.start();
