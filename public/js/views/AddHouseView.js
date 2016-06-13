'use strict';

var Backbone = require('backbone');
var _= require('lodash');


module.exports = Backbone.View.extend({
  className: 'addHouseForm',
  template: TFT.addHouse,
  
  render: function () {
    this.$el.append(this.template());
    return this;
  },
  
  /*
  //not sure about this one :)
  remove: function () {
	console.log("Igethere");//
    this._children.forEach(function (view) {
      view.remove();
    });
    Backbone.View.prototype.remove.call(this); //no idea what this does; looks super fancy though
  }*/
});
