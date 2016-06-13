'use strict';

var _ = require('lodash');
var Backbone = require('backbone');
var House = require('../models/House');

var Houses = Backbone.Collection.extend({
  model: House,
  url: '/api/houses',
  
  //methods go here:

});

module.exports = Houses;