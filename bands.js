'use strict';

var bands = [
  {
    name: 'B Fleischmann',
    genre: ['Trip Hop', 'Electronic'],
    album: ['A Choir of Empty Bed', 'Poploops for Breakfast']
  },
  {
    name: 'Bonobo',
    genre: ['Chill Wave', 'Electronic'],
    album: ['Dial M for Monkey', 'Animal Magic', 'Days To Come']
  },
  {
    name: 'The Cassandra Project',
    genre: ['Chill Wave', 'Trip Hop'],
    album: ['Angels in the Sky'],
  },
  {
    name: 'Meteor',
    genre: ['Dream Pop', 'Chill Wave'],
    album: ['Click Click']
  },
  {
    name: 'Little Joy',
    genre: ['Electronic', 'Trip Hop'],
    album: ['Little Joy']
  },
  {
    name: 'Plants and Animals',
    genre: ['Dream Pop', 'Chill Wave'],
    album: ['Parc Avenue']
  },
  {
    name: 'Puzzle 3',
    genre: ['Chill Wave', 'Electronic'],
    album: ['Lift Your Skinny Fists Like Antennaas']
  },
  {
    name: 'God Speed You Black Emperor',
    genre: ['Electronic'],
    album: ['Angels in the Sky']
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




