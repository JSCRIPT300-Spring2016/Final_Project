'use strict';

var Backbone = require('backbone');
var FoodTypesItemView = require('./PropsItemView');

module.exports = Backbone.View.extend({
  className: 'allPropsList',
  template: TFT.allProps,
  _children: [],
  initialize: function () {

    this.foodTypes = this.collection.getAllProps();
    this.foodTypes.sort();
  },
  render: function () {
    
    this.$el.append(this.template());
    this.allProps.forEach(function (type) {
      var itemView = new PropsItemView({ type: type });
      this._children.push(itemView);
      this.$('.allPropsList').append(itemView.render().el);
    }, this);

    return this;
  },
  remove: function () {

    this._children.forEach(function (view) {
      view.remove();
    });
    Backbone.View.prototype.remove.call(this);
  }
});