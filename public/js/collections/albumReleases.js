'use strict';

var _ = require('lodash');
var Backbone = require('backbone');
var AlbumReleases = require('../models/albumReleaseModel');

module.exports = Backbone.Collection.extend({
    model: albumReleases,
    url: '/complete-library',
    getLibrary: function () {
      return model.get('artist');
    }));
  }
});
