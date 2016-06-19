var _ = require('lodash');
var Backbone = require('backbone');
var CiderView = require('./CiderView');

module.exports = Backbone.View.extend({
  el: $('#cider-list'),
  render: function(){
    var self = this;
    this.$el.html('');
    _.each(this.collection.toArray(), function(cider){
      self.$el.append((new CiderView({ model: cider })).render().$el);
    });

    return this;
  }
});
