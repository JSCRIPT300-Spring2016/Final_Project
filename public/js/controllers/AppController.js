'use strict';

var ResultsView = require( '../views/ResultsView' );
var Todos = require( '../collections/Todos' );
var todos = new Todos();
var vent = require( '../events/Vent' );
var resultsView = new ResultsView( { el: '#results', collection: todos } );
var jqxhr = todos.fetch();

vent.on( 'allTodos:selected', showAllTodos );
vent.on( 'impTodos:selected', showImpTodos );
vent.on( 'postNew:selected', postNew );

function showAllTodos() {

  jqxhr.done( function () {
    resultsView.showAllTodos();
  });
}

function showImpTodos() {

  jqxhr.done( function () {
    resultsView.showImpTodos();
  });
}

function postNew( obj ) {

  todos.create( obj );
}

module.exports = {
  showAllTodos: showAllTodos,
  showImpTodos: showImpTodos
};
