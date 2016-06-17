'use strict';

var Backbone = require('backbone');
//var _= require('lodash');

module.exports = Backbone.View.extend({
  className: 'detailList',
  /*global TFT:true*/
  /*eslint no-undef: "error"*/
  template: TFT.singleHouse,
  render: function () {
    this.$el.append(this.template(this.model.toJSON()));

    return this;
  },
  
  remove: function () {
    Backbone.View.prototype.remove.call(this);
  }
});