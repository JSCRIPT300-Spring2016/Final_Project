'use strict';

var ResultsView = require('../views/ResultsView');
var AlbumReleases = require('../collections/albumReleases');
var vent = require('../events/Vent');

var albumReleases = new AlbumReleases();
var resultsView = new ResultsView({ el: '#results', collection: albumReleases });
var jqxhr = albumReleases.fetch();

vent.on('completeLib:selected', showAllReleases);

function showAllReleases() {
  jqxhr.done(function () {
    resultsView.showAllReleases();
  });
}

module.exports = {
  showAllReleases: showAllReleases
};
