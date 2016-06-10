var Backbone = require('backbone');

var mainRouter = require('../routers/mainRouter');
var mainController = require('../controllers/mainController');

module.exports = Backbone.View.extend({
  events: {
    //add something
  },
  initialize: function() {
    //add controller stuff in here
    console.log('main view working');
    this.mainRouter = new mainRouter({ mainController: mainController });
    Backbone.history.start({ pushState: true });
  }
});
