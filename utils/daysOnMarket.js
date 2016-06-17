//Node module ('Revealing Pattern'): 
//returns the number of days a 
//property has been on the market

var date = null;

var _initDate = function(){
  date = new Date();
};

var _setDate = function(enteredDate){
  if (date === null){
    _initDate();
  }
 
  var dateArray = enteredDate.split("/");
  var month = dateArray[0];
  if (month.charAt(0) == '0'){
    month = month.charAt(1);
  }	
  var day = dateArray[1];
  if (day.charAt(0) == '0'){
    day = day.charAt(1);
  }	
  var year = dateArray[2];
  
  date.setDate(day);
  date.setMonth(month-1);
  date.setFullYear(year);
  
  //all other time variables set to 0 (start of local day)
  date.setMinutes(0);
  date.setMilliseconds(0);
  date.setHours(0);
  date.setSeconds(0);
};

//function returns the milliseconds since January 1, 1970 from today
//at the beginning of the local day (0:00)
var _todaysDateMS = function(){
  var today = new Date();
  
  //set today to start of day
  today.setMinutes(0);
  today.setMilliseconds(0);
  today.setHours(0);
  today.setSeconds(0);
  
  //return today in MS
  return today.getTime();
 };
 
//function returns the number of days between today and 
//an entered date from the past (=days on the market)
//difference is measured from start of each day
 var getDaysOnMarket = function(enteredDate){
  //set the internal date based on entered data
  //the date will be set to the very start of that day
  _setDate(enteredDate);
  //get the ms time
  var enteredDateMS = date.getTime();
  
  //get today's ms time measured from start of day
  var todayMS = _todaysDateMS();
  
  var timeDiff = todayMS - enteredDateMS;
  var dayDiff = Math.floor(timeDiff/1000/60/60/24);
  
  return dayDiff;
} 

var myObj = {
  getDaysOnMarket: getDaysOnMarket
};

module.exports = myObj;