'use strict';

var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  className: 'addHouseForm',
  /*global TFT:true*/
  /*eslint no-undef: "error"*/
  template: TFT.addHouse,
  
  render: function () {
    this.$el.append(this.template());
	
    return this;
  },
    
  remove: function () {
    Backbone.View.prototype.remove.call(this);
  }
});