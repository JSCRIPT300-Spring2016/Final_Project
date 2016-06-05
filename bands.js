'use strict';

var bands = [
  {
    name: 'B Fleischmann',
    genre: ['Muted', 'Electronic'],
    album: ['A Choir of Empty Bed', 'Poploops for Breakfast']
  },
  {
    name: 'Bonobo',
    genre: ['Chill Wave', 'Chill'],
    album: ['Dial M for Monkey', 'Animal Magic', 'Days To Come']
  },
  {
    name: 'Blockhead',
    genre: ['Electronic', 'Trip Hop'],
    album: ['Music by Cavelight', 'Science Fiction']
  }
];

var _ = require('lodash');

//returns truck object
function getBands() {
  return bands;
}

//find by band name
function getBand(name) {
  return bands.find(function (band){
    return band.name === name;
  });
}

//get genres
function getGenres() {
  var genres = bands.map(function (band) {
    return band.genre;
  });
  genres = _.flatten(genres);
  genres = _.uniq(genres);

  return genres;
}

function filterByGenre(musicType) {
  return bands.filter(function (band) {
    var genres = band.genre.map(function (genre) {
      return genre.toLowerCase();
    });

    return genres.indexOf(musicType.toLowerCase()) > -1;
  });
}


module.exports = {
  getBands: getBands,
  getBand: getBand,
  getGenres: getGenres,
  filterByGenre: filterByGenre
};




