'use strict';

var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  className: 'ideaDetail',
  template: TFT.idea,
  render: function () {

    this.$el.append(this.template(this.model.toJSON()));

    return this;
  }
});
