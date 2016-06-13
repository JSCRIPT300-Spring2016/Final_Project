'use strict';

var Backbone = require('backbone');
var TodosView = require('./TodosView');
var ImpTodosView = require('./ImpTodosView');
var Todos = require('../collections/Todos');

module.exports = Backbone.View.extend({

  showAllTodos: function () {

    if ( this.listView ) {
      this.listView.remove();
    }
    this.listView = new TodosView( { collection: this.collection } );
    this.$el.prepend( this.listView.render().el );
  },
  showImpTodos: function () {

    var impTodos = new Todos( this.collection.getImpTodos() );

    if ( this.listView ) {
      this.listView.remove();
    }
    this.listView = new ImpTodosView( { collection: impTodos } );
    this.$el.append( this.listView.render().el );
  }
});
