'use strict';

var Backbone = require('backbone');
var _= require('lodash');
var HouseItemView = require('./HouseItemView');
var HouseView = require('./HouseView');

module.exports = Backbone.View.extend({
  className: 'allHousesList',
  id: 'dynamicHouseList',
  template: TFT.allHouses,
  _children: [], //empty array for all children views
  
  render: function () {
    this.$el.append(this.template());
	
	/*
	this.collection.each(function(model){
			console.log("Model: " + model); 
	});*/

    this.collection.each(function (model) { 
		//console.log("itemviews");
      var itemView = new HouseItemView({ model: model });
	  
      this._children.push(itemView);
	  this.$('.housesList').append(itemView.render().el); //housesList is the class named in the template
    }, this);

    return this;
  },
  
  //not sure about this one :)
  remove: function () {
	console.log("Igethere");//
    this._children.forEach(function (view) {
      view.remove();
    });
    Backbone.View.prototype.remove.call(this); //no idea what this does; looks super fancy though
  }
});
