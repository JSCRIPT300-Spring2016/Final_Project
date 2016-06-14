'use strict';

var $ = require('jquery');

$( function () {

  var AppView = require( './views/AppView' );
  var app = new AppView( { el: 'body' } );
  var vent = require( './events/Vent' );

  $( 'form' ).on( 'submit', function( e ) {

    e.preventDefault();

    var $form = $(this);
    var todoData = {
      name: $( '[name=name]' ).val(),
      important: $( '#important' ).is( ':checked' )
    };

    vent.trigger( 'postNew:selected', todoData );

    this.reset();
  });
});