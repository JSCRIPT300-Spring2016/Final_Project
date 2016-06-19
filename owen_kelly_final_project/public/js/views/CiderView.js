var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  tagName: 'tr',
  template: JST.ciderTableItem,
  events: {
    'click .showReviews': 'handleShowReviews',
    'click .hideReviews': 'handleHideReviews'
  },
  id: function(){
    return "cider" + this.model.get("_id");
  },
  render: function(){
    this.$el.html((this.template(this.model.toJSON())));

    return this;
  },
  handleShowReviews: function(event){
    event.preventDefault();
    var path  = event.currentTarget.href.replace(location.origin, '');
    this.$('.showReviews').hide();
    this.$('.hideReviews').show();
    vent.trigger('ciderReviews:selected', { path: path, model: this.model });
  },
  handleHideReviews: function(event){
    event.preventDefault();
    this.$('.showReviews').show();
    this.$('.hideReviews').hide();
    vent.trigger('ciderReviews:deselected', { path: '' });
  }
});


