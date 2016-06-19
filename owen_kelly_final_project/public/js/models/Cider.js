var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/api/ciders',
  idAttribute: '_id',
  initialize: function(){
    this.set({ cidername: this.get('maker') + this.get('name') });
  },
  defaults: {
    rating: 0
  }
});
