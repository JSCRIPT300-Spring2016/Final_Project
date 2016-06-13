'use strict';

var Backbone = require('backbone');
var Todo = require('../models/Todo');

module.exports = Backbone.Collection.extend({
  model: Todo,
  url: '/api/todo',
  getImpTodos: function (){
    return this.where({ important: true });
  }
});
