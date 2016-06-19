var Backbone = require('backbone');

var Review = Backbone.Model.extend({
  urlRoot: 'api/reviews',
  idAttribute: '_id'
});
