var Backbone = require('backbone');
var ReviewView = require('./ReviewView');

module.exports = Backbone.View.extend({
  tagName: 'table',
  template: JST.reviewTableHeader,
  events: {
    '.addReview': 'handleCreateNewReview'
  },
  initialize: function(){
    this.collection.on('add', this.render, this);
  },
  handleCreateNewReview: function(event){
    event.preventDefault();
    var text = $(".review-input").val();
    var rating = $('.rating-input').val();
    var ciderId = this.ciderId;
    $(".review-input").val('');
    $(".rating-input").val(1);
    vent.trigger('addReview', { text: text, rating: rating, ciderId: ciderId });
  },
  render: function(){
    var self = this;
    this.$el.after(this.template());
    _.each(this.collection.toArray(), function(review){
      self.$el.html((new ReviewView({ model: review })).render().$el);
    });

    return this;
  }
});