'use strict';

var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  events: {
    'click #allProps': 'allProps',
    'click #mdfProps': 'mdfProps',
    'click #dueThisWeek': 'dueThisWeek'
  },
  handleAllProps: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('allProps:selected', { path: path });
  },
  handleMdfProps: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('mdfProps:selected', { path: path });
  },
  handleDueThisWeek: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('dueThisWeek:selected', { path: path });
  }
});
