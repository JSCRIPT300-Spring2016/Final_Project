'use strict';

var _ = require( 'lodash' );
var Backbone = require( 'backbone' );

module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'todosList__item',
  template: TD.todoListItem,
  events: {
    'click .deleteBtn': 'todoDestroy'
  },
  initialize: function () {

    this.model.on( 'destroy', this.remove, this );
  },
  todoDestroy: function ( e ) {

    e.stopPropagation();
    this.model.destroy();
  },
  remove: function (){

    this.$el.remove();
  },
  render: function () {

    var data = _.extend( this.model.attributes, this.model.id );

    this.$el.append( this.template( data ) );

    return this;
  }
});