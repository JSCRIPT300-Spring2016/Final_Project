'use strict';

var Backbone = require('backbone');
var AlbumReleases = require('./collections/albumReleases')
var AlbumReleasesView = require('./AlbumReleasesView');

module.exports = Backbone.View.extend({
  initialize: function () {
    
  },
  showAllReleases: function () {
    if (this.listView) {
      this.listView.remove();
    }
    this.listView = new AlbumReleasesView({ collection: this.collection });
    this.$el.append(this.listView.render().el);
  }
});
