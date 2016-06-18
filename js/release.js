'use strict';  

var filt = require('underscore');
var util = require('util');

var releases = [{
    artist: 'Pink Floyd',
    title: 'The Wall',
    date: '1984',
    label: 'Columbia',
    format: 'CD',
    media: [{
      tracks: [
        01: 'In the Flesh?',
        02: 'The Thin Ice',
        03: 'Another Brick in the Wall, Part 1',
        04: 'The Happiest Days of Our Lives',
        05: 'Another Brick in the Wall, Part 2 ',
        06: 'Mother',
        07: 'Goodbye Blue Sky',
        08: 'Empty Spaces',
        09: 'Young Lust',
        010: 'One of My Turns',
        011: 'Don’t Leave Me Now',
        012: 'Another Brick in the Wall, Part 3',
        013: 'Goodbye Cruel World',
        014: 'Hey You',
        015: 'Is There Anybody Out There?',
        016: 'Nobody Home ',
        017: 'Vera',
        018: 'Outside the Wall'
      ],
      coverart: 'http://coverartarchive.org/release/4bd2dbd5-a961-335a-a618-39c26b2ee791/2550516058-250.jpg',
    }],
  },
  {
    artist: 'Led Zeppelin',
    title: 'In Through the Out Door',
    date: '1979',
    label: 'Swan Song',
    media: [{
      tracks: [
        01: 'In the Evening',
        02: 'South Bound Saurez',
        03: 'Fool in the Rain',
        04: 'Hot Dog',
        05: 'Carouselambra',
        06: 'All My Love',
        07: 'I’m Gonna Crawl'
      ],
      coverart: 'http://coverartarchive.org/release/6a2d45bd-7baf-4e5b-b928-a20cc5962af4/5644641007-250.jpg',
    }],
  },
  {
    artist: 'The Black Keys',
    title: 'El Camino',
    date: '2011',
    label: 'Nonesuch',
    media: [{
      tracks: [
        01: 'Lonely Boy',
        02: 'Dead and Gone',
        03: 'Gold on the Ceiling',
        04: 'Little Black Submarines',
        05: 'Money Maker',
        06: 'Run Right Back',
        07: 'Sister',
        08: 'Hell of a Season',
        09: 'Stop Stop',
        010: 'Nova Baby',
        011: 'Mind Eraser' 
      ],
      coverart: 'http://coverartarchive.org/release/f10badef-094b-48b1-b345-cddfc3d41673/2693046518.jpg',
    }],
  },
  {
    artist: 'Blank + Jones',
    title: 'The Logic of Pleasure',
    date: '2008',
    label: 'soundcolours',
    media: [{
      tracks: [
        01: 'Consequences',
        02: 'Miracle Cure',
        03: 'The Night Starts Here (A Blank + Jones remix)',
        04: 'So Cold',
        05: 'California Sunsets',
        06: 'Manifesto',
        07: 'Where You Belong',
        08: 'Breakout',
        09: 'Catwalk',
        010: 'Don\'t Stop'
      ],
      coverart: 'http://coverartarchive.org/release/b1772425-e045-4370-af6a-e7e6520bfd46/6941963918-250.jpg',
    }],
  },
  {
    artist: 'The Doors',
    title: 'Love Me Two Times',
    date: '2003',
    label: 'Falcon Neue Medien',
    media: [{
      tracks: [
        01: 'Touch Me',
        02: 'Waiting for the Sun',
        03: 'Soul Kitchen',
        04: 'The Crystal Ship',
        05: 'Twentieth Century Fox',
        06: 'Love Her Madly',
        07: 'Backdoor Man',
        08: 'I Look at You',
        09: 'End of the Night',
        010: 'Take It as It Comes',
        011: 'When the Music\'s Over',
        012: 'Hello, I Love You',
        013: 'My Wild Love',
        014: 'Summer\'s Almost Gone',
        015: 'Five To One',
        016: 'Strange Days',
        017: 'Horse Latitudes',
        018: 'Love Me Two Times',
        019: 'Moonlight Drive',
        020: 'My Eyes Have Seen You',
        021: 'Wintertime Love',
      022: 'Spanish Caravan',
      023: 'You\'re Lost Little Girl',
      024: 'Not to Touch the Earth',
      025: 'We Could Be So Good Together'
      ],
      coverart: 'https://images-na.ssl-images-amazon.com/images/I/51aHcudEWWL.jpg',
    }],
  },
  {
    artist: 'Foster the People',
    title: 'Torches',
    date: '2011',
    label: 'StarTime International',
    media: [{
      tracks: [
        01: 'Helena Beat',
        02: 'Pumped Up Kicks',
        03: 'Call It What You Want',
        04: 'Don\’t Stop (Color on the Walls) ',
        05: 'Waste',
        06: 'I Would Do Anything for You',
        07: 'Houdini',
        08: 'Life on the Nickel',
        09: 'Miss You',
        010: 'Warrant' 
      ],
      coverart: 'http://coverartarchive.org/release/f9c479e6-55b0-43d2-b2b8-bc3948922c3b/4183358943-250.jpg',
    }],
  },
  {
    artist: 'Goldfrapp',
    title: 'Black Cherry',
    date: '2003',
    label: 'Mute Corporation',
    media: [{
      tracks: [
        01: 'Crystalline Green',
        02: 'Train',
        03: 'Black Cherry',
        04: 'Tiptoe',
        05: 'Deep Honey',
        06: 'Hairy Trees',
        07: 'Twist',
        08: 'Strict Machine',
        09: 'Forever',
        010: 'Slippage',
        011: 'Big Black Cloud Little White Lie',
        012: 'Train (Village Hall mix)',
        013: 'Train (Ewan Pearson 6/8 vocal)',
        014: 'El Train (T.Raumschmiere remix)' 
      ],
      coverart: 'https://images-na.ssl-images-amazon.com/images/I/51qkB5uFe3L.jpg',
    }],
  },
  {
    artist: 'Iron and Wine',
    title: 'The Creek Drank the Cradle',
    date: '2002',
    label: 'Sub Pop Records',
    media: [{
      tracks: [
        01: 'Lion\'s Mane',
        02: 'Bird Stealing Bread',
        03: 'Faded From the Winter',
        04: 'Promising Light',
        05: 'The Rooster Moans',
        06: 'Upward Over the Mountain',
        07: 'Southern Anthem',
        08: 'An Angry Blade',
        09: 'Weary Memory',
        010: 'Promise What You Will',
        011: 'Muddy Hymnal' 
      ],
      coverart: 'http://coverartarchive.org/release/e270a453-a6c5-4bbc-91d7-5e4378e7d08c/2500642993-250.jpg',
    }],
  },
  {
    artist: 'Jefferson Airplane',
    title: 'Surrealistic Pillow',
    date: '1967',
    label: 'RCA Victor',
    media: [{
      tracks: [
        01: 'She Has Funny Cars',
        02: 'Somebody to Love',
        03: 'My Best Friend',
        04: 'Today',
        05: 'Comin’ Back to Me',
        06: '3⁄5 of a Mile in 10 Seconds',
        07: 'D.C.B.A.‐25',
        08: 'How Do You Feel',
        09: 'Embryonic Journey',
        010: 'White Rabbit',
        011: 'Plastic Fantastic Lover' 
      ],
      coverart: 'http://coverartarchive.org/release/c9795844-0c1b-48a9-8322-fa36874af6cb/3448258087-250.jpg',
    }],
  },
  {
    artist: 'Marty Robbins',
    title: 'Gunfighter Ballads and Trail Songs',
    date: '1959',
    label: 'Columbia',
    media: [{
      tracks: [
        01: 'Big Iron',
        02: 'A Hundred and Sixty Acres',
        03: 'They’re Hanging Me Tonight',
        04: 'Cool Water',
        05: 'Billy the Kid',
        06: 'Utah Carol',
        07: 'The Strawberry Roan',
        08: 'The Master’s Call',
        09: 'Running Gun',
        010: 'El Paso',
        011: 'In the Valley',
        012: 'The Little Green Valley',
        013: 'The Hanging Tree',
        014: 'Saddle Tramp',
        015: 'El Paso (full-length version)' 
      ],
      coverart: 'http://coverartarchive.org/release/186454fd-b135-3265-9378-56fc9e9bd986/7723010518-250.jpg',
    }],
  }  
];


function getRelease(releaseName) {
  var truckObj = filt.where(trucks, {
    name: truckName
  });
  
  return util.inspect(truckObj, {showHidden: false, depth: null});
}

function getArtist(artistName) {
  var truckObj = filt.where(trucks, {
    name: truckName
  });
  return util.inspect(truckObj, {showHidden: false, depth: null});
}


module.exports = {
  getRelease: getRelease,
  getArtist: getArtist
};

