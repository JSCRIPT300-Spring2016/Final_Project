'use strict';

var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  events: {
    'click #completeLib': 'returnFullLibrary',
    'click #allArt': 'returnAlbumArt'
  },
    returnFullLibrary: function (ev) {
      ev.preventDefault();
      var path  = ev.currentTarget.href.replace(location.origin, '');
      vent.trigger('completeLib:selected', { path: path });
    },
    returnAlbumArt: function (ev) {
      ev.preventDefault();
      var path  = ev.currentTarget.href.replace(location.origin, '');
      vent.trigger('allArt:selected', { path: path });
    }
});
