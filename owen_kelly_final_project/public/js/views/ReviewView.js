var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  tagName: 'tr',
  template: JST.reviewTableItem,
  render: function(){
    this.$el.html((this.template(this.model.toJSON())));

    return this;
  }
});
