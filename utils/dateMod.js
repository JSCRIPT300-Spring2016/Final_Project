var date = new Date();
var MONTHS = new Array( 12 );
MONTHS[0] = 'January';
MONTHS[1] = 'February';
MONTHS[2] = 'March';
MONTHS[3] = 'April';
MONTHS[4] = 'May';
MONTHS[5] = 'June';
MONTHS[6] = 'July';
MONTHS[7] = 'August';
MONTHS[8] = 'September';
MONTHS[9] = 'October';
MONTHS[10] = 'November';
MONTHS[11] = 'December';
var WEEKDAY = new Array( 7 );
WEEKDAY[0]=  'Sunday';
WEEKDAY[1] = 'Monday';
WEEKDAY[2] = 'Tuesday';
WEEKDAY[3] = 'Wednesday';
WEEKDAY[4] = 'Thursday';
WEEKDAY[5] = 'Friday';
WEEKDAY[6] = 'Saturday';

function __checkDate() {

  if ( date instanceof Date ) {
    return;
  } else {
    date  = new Date();
  }
}

function getDate( format ) {

  __checkDate();

  if ( typeof format === 'string' ) {
    if ( format === 'milliseconds' ) {
      return Date.parse( date );
    } else if ( format === 'formatted' ) {
      return getMonthName() + ' ' + date.getDate() + ', ' +
          date.getFullYear();
    } else {
      return;
    }
  } else {
    return Date.parse( date );
  }
}

function getMonthName() {

  __checkDate();

  return MONTHS[ date.getMonth() ];
}

var dateStamp = {
  getDate: getDate
};

module.exports = dateStamp;