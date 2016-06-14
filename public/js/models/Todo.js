'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  initialize: function() {
    console.log( 'Todo model initialized' );
  },
  idAttribute: '_id',
  urlRoot: '/api/todo',
  defaults: {
    name: 'New Thing',
    important: false,
    completed: false
  }
});