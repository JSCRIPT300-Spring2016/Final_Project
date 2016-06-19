'use strict';
var Backbone = require('backbone');
//Model
module.exports = Backbone.Model.extend({
  urlRoot : '/api/entries',
  defaults:
  {
    name: '',
    address: '',
    description: ''
  }
});