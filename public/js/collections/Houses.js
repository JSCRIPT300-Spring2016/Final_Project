'use strict';

var Backbone = require('backbone');
var House = require('../models/House');

var Houses = Backbone.Collection.extend({
  model: House,
  url: '/api/houses'
});

module.exports = Houses;