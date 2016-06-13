'use strict';

var Backbone = require('backbone');
var _= require('lodash');

module.exports = Backbone.View.extend({
  className: 'detailList',
  template: TFT.singleHouse, 

  render: function () {
    this.$el.append(this.template(this.model.toJSON()));

    return this;
  },  
});