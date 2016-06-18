'use strict';  

var filt = require('underscore');
var util = require('util');

var releases = [{
    _id: 0,
    artist: 'Pink Floyd',
    title: 'The Wall',
    date: '1984',
    label: 'Columbia',
    coverart: 'http://coverartarchive.org/release/4bd2dbd5-a961-335a-a618-39c26b2ee791/2550516058-250.jpg',

  },
  {
    _id: 1,
    artist: 'Led Zeppelin',
    title: 'In Through the Out Door',
    date: '1979',
    label: 'Swan Song',
    coverart: 'http://coverartarchive.org/release/6a2d45bd-7baf-4e5b-b928-a20cc5962af4/5644641007-250.jpg',
  },
  {
    _id: 2,
    artist: 'The Black Keys',
    title: 'El Camino',
    date: '2011',
    label: 'Nonesuch',
    coverart: 'http://coverartarchive.org/release/f10badef-094b-48b1-b345-cddfc3d41673/2693046518.jpg',
  },
  {
    _id: 3,
    artist: 'Blank + Jones',
    title: 'The Logic of Pleasure',
    date: '2008',
    label: 'soundcolours',
    coverart: 'http://coverartarchive.org/release/b1772425-e045-4370-af6a-e7e6520bfd46/6941963918-250.jpg',
  },
  {
    _id: 4,
    artist: 'The Doors',
    title: 'Love Me Two Times',
    date: '2003',
    label: 'Falcon Neue Medien',
    coverart: 'https://images-na.ssl-images-amazon.com/images/I/51aHcudEWWL.jpg',
  },
  {
    _id: 5,
    artist: 'Foster the People',
    title: 'Torches',
    date: '2011',
    label: 'StarTime International',
    coverart: 'http://coverartarchive.org/release/f9c479e6-55b0-43d2-b2b8-bc3948922c3b/4183358943-250.jpg',
  },
  {
    _id: 6,
    artist: 'Goldfrapp',
    title: 'Black Cherry',
    date: '2003',
    label: 'Mute Corporation',
    coverart: 'https://images-na.ssl-images-amazon.com/images/I/51qkB5uFe3L.jpg',
  },
  {
    _id: 7,
    artist: 'Iron and Wine',
    title: 'The Creek Drank the Cradle',
    date: '2002',
    label: 'Sub Pop Records',
    coverart: 'http://coverartarchive.org/release/e270a453-a6c5-4bbc-91d7-5e4378e7d08c/2500642993-250.jpg',
  },
  {
    _id: 8,
    artist: 'Jefferson Airplane',
    title: 'Surrealistic Pillow',
    date: '1967',
    label: 'RCA Victor',
    coverart: 'http://coverartarchive.org/release/c9795844-0c1b-48a9-8322-fa36874af6cb/3448258087-250.jpg',
  },
  {
    _id: 9,
    artist: 'Marty Robbins',
    title: 'Gunfighter Ballads and Trail Songs',
    date: '1959',
    label: 'Columbia',
    coverart: 'http://coverartarchive.org/release/186454fd-b135-3265-9378-56fc9e9bd986/7723010518-250.jpg',
  }  
];

function getLibrary() {
 return releases;
};

function getArt() {
  return releases.map(function(a) {
    return a.coverart;
  });
};


module.exports = {
  getLibrary: getLibrary,
  getArt: getArt
};

