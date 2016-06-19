var Backbone = require('backbone');

var mainRouter = require('../routers/mainRouter');
var mainController = require('../controllers/mainController');

module.exports = Backbone.View.extend({
  events: {
    //add something
  },
  initialize: function(e) {
    console.log('main view working');
    this.mainRouter = new mainRouter({ mainController: mainController });
    // this.mainRouter.on
    // pushState: true,
    // something is wrong with hash redirects
    // need prevent default: http://stackoverflow.com/questions/28323836/backbone-js-pushstate-true
    // help here? http://slides.com/kinakuta/deck-17?token=vY03XdtR#/8
    // may need vent

    // Backbone.history.start({ hashChange: false, pushState: true });
    Backbone.history.start({ pushState: true });
  }
});
