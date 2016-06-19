'use strict';

//single inventory location View
App.Views.InventoryLocation = (function(){
  return Backbone.View.extend({
    tagName: 'tr',

    template: template('allInventoryLocationsTemplate'),

    events: {
      'click .delete-location': 'removeLocation'
    },

    removeLocation: function() {
      this.model.destroy();
      this.remove();
      //console.log('destroyed');
    },

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );

      return this;
    }
  });
})();
