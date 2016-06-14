'use strict';
var Backbone = require( 'backbone' );

module.exports = Backbone.Router.extend({
  routes: {
    '': 'showAllTodos',
    'important': 'showImpTodos'
  },
  initialize: function ( options ) {

    options || {};
    this.appController = options.appController;
  },
  showAllTodos: function () {

    this.appController.showAllTodos();
  },
  showImpTodos: function () {

    this.appController.showImpTodos();
  }
});