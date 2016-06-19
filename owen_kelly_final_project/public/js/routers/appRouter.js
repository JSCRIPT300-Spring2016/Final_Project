var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'showAllCiders',
    ':cidername/reviews': 'showReviewsForCider'
  },
  initialize: function(options){
    options || {};
    this.appController = options.appController;
    this.appController.showAllCiders();
  },
  showAllCiders: function(){
    this.appController.showAllCiders();
  },
  showReviewsForCider: function(cidername){
    this.appController.showReviewsForCider({ cidername: cidername });
  }

});