'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */

var App = (function () {
  return Backbone.Router.extend({
    routes: {
      '': 'index',
      'done': 'done'
    },
    index: function(){
      alert('Enter your name and click Pick Colors');
    },
    done: function(){
      alert('Game Over. Thanks for playing.');
    },
  });
})();

new App();
Backbone.history.start();