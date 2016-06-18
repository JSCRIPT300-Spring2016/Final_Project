'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */

var ColorGame = (function () {
  return Backbone.Model.extend({
    initialize: function () {
      console.log('ColorGame Model initialized.');
    },
    asString: function () {
      return JSON.stringify(this.toJSON());
    }
  });
})();