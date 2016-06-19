var Backbone = require('backbone');
var Cider = require('../models/Cider.js');

module.exports = Backbone.Collection.extend({
  url: '/api/ciders',
  model: Cider
});
