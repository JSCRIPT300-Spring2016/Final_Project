'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'home',
    'done': 'done'
  },
  initialize: function (options) {
    options || {};
    this.appController = options.appController;
  },
  home: function () {
    alert("Enter your name and click Pick Colors");
  },
  done: function(){
    alert("Game Over. Thanks for playing.");
  }
});

Backbone.history.start();