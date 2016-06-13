'use strict';

var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  events: {
    'click #allIdeas': 'handleAllIdeas',
    'click #ideaRankings': 'handleRankings'
  },
  handleAllIdeas: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('allIdeas:selected', { path: path });
  },
  handleRankings: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('rankings:selected', { path: path });
  }
});
