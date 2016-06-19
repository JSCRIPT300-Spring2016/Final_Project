var Backbone = require('backbone');
var AppRouter = require('../routers/AppRouter');
var AppController = require('../controllers/AppController');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  initialize: function(){
    this.appRouter = new AppRouter({ appController: AppController });

    this.navigateSelected = this.navigateSelected.bind(this);
    vent.on('ciderReviews:selected', this.navigateSelected);

    Backbone.history.start({ pushState: true });
  },
  navigateSelected: function(options){
    this.appRouter.navigate(options.path);
  }

});
