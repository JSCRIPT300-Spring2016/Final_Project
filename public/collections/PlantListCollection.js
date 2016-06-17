var Backbone = require('backbone');
var Plant = require('../models/plant');

module.exports = Backbone.Collection.extend({
  model: Plant,
  url: '/api/garden'
});
