'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */

var Player = (function () {
  return Backbone.Model.extend({
    initialize: function () {
      console.log('Player created');
    },
    asString: function () {
      return JSON.stringify(this.toJSON());
    }
  });
})();

var player = new Player({
  name: '',
  highScore: '0'
});