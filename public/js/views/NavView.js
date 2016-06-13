//temp Note: seems to be done

'use strict';

var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  events: {
    'click #allHouses': 'handleAllHouses',
    'click #addHome': 'handleAddHome'
  },
  handleAllHouses: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('allHouses:selected', { path: path });
  },
  handleAddHome: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('addHome:selected', { path: path });
  }
});
