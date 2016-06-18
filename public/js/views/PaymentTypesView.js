'use strict';

var Backbone = require('backbone');
var PaymentTypesItemView = require('./PaymentTypesItemView');

module.exports = Backbone.View.extend({
  className: 'allPaymentTypesList',
  template: TFT.paymentTypes,
  _children: [],
  initialize: function () {

    this.paymentTypes = this.collection.getPaymentTypes();
    this.paymentTypes.sort();
  },
  render: function () {
    
    this.$el.append(this.template());
    this.paymentTypes.forEach(function (type) {
      var itemView = new PaymentTypesItemView({ type: type });
      this._children.push(itemView);
      this.$('.paymentTypesList').append(itemView.render().el);
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