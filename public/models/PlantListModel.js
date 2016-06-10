var Backbone = require('backbone');

var Plant = require('./plant');

module.exports = Backbone.Collection.extend({
  url: '/plants',
  model: Plant
});
