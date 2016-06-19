'use strict';

App.Collections.InventoryLocations = (function() {
  return Backbone.Collection.extend({
    model: App.Models.InventoryLocation,
    url:'/locations'
  });
})();
