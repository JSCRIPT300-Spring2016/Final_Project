'use strict';

var Backbone = require( 'backbone' );
var vent = require( '../events/Vent' );

module.exports = Backbone.View.extend({
  events: {
    'click #allTodos': 'handleAllTodos',
    'click #impTodos': 'handleImpTodos'
  },
  handleAllTodos: function ( ev ) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace( location.origin, '' );
    vent.trigger( 'allTodos:selected', { path: path } );
  },
  handleImpTodos: function ( ev ) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace( location.origin, '' );
    vent.trigger( 'impTodos:selected', { path: path });
  }
});