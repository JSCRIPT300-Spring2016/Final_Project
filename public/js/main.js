'use strict';

(function() {
  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Reouter: {}
  };

  window.vent = _.extend({}, Backbone.Events);

  window.template = function(id) {
    return _.template( $('#' + id).html() );
  };
})();
