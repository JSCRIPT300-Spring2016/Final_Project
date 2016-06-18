'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* eslint-disable no-console */

var Games = Backbone.Collection.extend({
  initialize: function () {
    console.log('Play collection is initialized');
  },
  model: ColorGame,
  url: '/shuffle',
});