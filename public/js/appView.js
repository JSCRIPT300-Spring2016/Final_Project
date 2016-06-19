'use strict';

//Global App Views
App.Views.App = (function(){
  return Backbone.View.extend({
      initialize: function() {
        var addInventoryLocationView = new App.Views.AddInventoryLocation(
          { collection: App.inventoryLocations });
        var allInventoryLocationsView = new App.Views.InventoryLocations({
          collection: App.inventoryLocations }).render();
        //console.log(this.collection.toJSON());
        $('#allInventoryLocations').append(allInventoryLocationsView.el);
      }
  });
})();
