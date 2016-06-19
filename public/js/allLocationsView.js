

//all inventory location View
App.Views.InventoryLocations = (function() {
  return Backbone.View.extend({
      tagName: 'tbody',

      initialize: function() {
        this.collection.on('add', this.addOne, this);
        //this.collection.on('remove', this.render(), this);
      },

      render: function() {
        this.collection.each( this.addOne, this);

        return this;
      },

      addOne: function(inventoryLocation) {
        var inventoryLocationView = new App.Views.InventoryLocation(
          { model: inventoryLocation });
        this.$el.append(inventoryLocationView.render().el);
      }
    });
})();
