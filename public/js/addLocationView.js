'use strict';

//add inventory location View
App.Views.AddInventoryLocation = (function(){
  return Backbone.View.extend({
      el: '#addInventoryLocation',

      initialize: function() {
        this.name = $('#inventorylocationName');
        this.type = $('#inventorylocationType');
        this.status = $('#inventorylocationStatus');
        this.latitude = $('#inventorylocationLatitude');
        this.longitude = $('#inventorylocationLongitude');
        this.product = $('#inventorylocationProduct');
        this.productQty = $('#inventorylocationProductQty');
      },

      events: {
        'submit': 'addInventoryLocation'
      },

      addInventoryLocation: function(e){
        e.preventDefault();

        this.collection.create({
          name: this.name.val(),
          type: this.type.val(),
          status: this.status.val(),
          latitude: this.latitude.val(),
          longitude: this.longitude.val(),
          product: this.product.val(),
          productQty: this.productQty.val()
        }, { wait: true });

        //console.log(this.collection);
        this.clearForm();
      },

      clearForm: function() {
        this.name.val('');
        this.type.val('');
        this.status.val('');
        this.latitude.val('');
        this.longitude.val('');
        this.product.val('');
        this.productQty.val('');
      }
    });
})();
