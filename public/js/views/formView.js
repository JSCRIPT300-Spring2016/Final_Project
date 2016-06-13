'use strict';

var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  events: {
    'submit form': 'handleFormSubmit'
  },
  handleFormSubmit: function ( ev ) {

    ev.preventDefault();
    //FORM EVENT SUMBISSION CODE HERE...SOONISH
  }
});
