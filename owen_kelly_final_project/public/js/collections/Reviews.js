var Backbone = require('backbone');
var Review = require('../models/Review.js');

module.exports = Backbone.Collection.extend({
  url: 'api/reviews',
  model: Review
});