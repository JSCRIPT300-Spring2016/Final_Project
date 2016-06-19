'use strict';

var Backbone = require('backbone');
var Entry = require('../models/models');

module.exports = Backbone.Collection.extend({
  model: Entry,
  url: '/api/entries'
});
