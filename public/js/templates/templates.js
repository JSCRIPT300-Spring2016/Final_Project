this["TFT"] = this["TFT"] || {};

this["TFT"]["addHouse"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">Add House</h2>\r\n<p>here will be a form to add new houses</p>\r\n';

}
return __p
};

this["TFT"]["allHouses"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">All Available Houses</h2>\r\n<ul class="housesList"></ul>\r\n';

}
return __p
};

this["TFT"]["HouseListItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="house" href="/houses/' +
((__t = ( _id)) == null ? '' : __t) +
'">\r\n  <p class="shortList"><u>Address:</u>' +
((__t = ( street )) == null ? '' : __t) +
', ' +
((__t = ( city )) == null ? '' : __t) +
', ' +
((__t = ( state )) == null ? '' : __t) +
', ' +
((__t = ( zipCode )) == null ? '' : __t) +
'</p>\r\n  <p class="shortList"><u>Price:</u>$' +
((__t = ( price )) == null ? '' : __t) +
'</p>\r\n  <p class="shortList"><u>Number of Bedrooms:</u> ' +
((__t = ( nrBedrooms )) == null ? '' : __t) +
'</p>\r\n</a>\r\n <button class="deleteHouse">Delete</button><br>\r\n\r\n';

}
return __p
};

this["TFT"]["singleHouse"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '  <li><u>Address:</u><br>\r\n  ' +
((__t = ( street )) == null ? '' : __t) +
'<br>\r\n  ' +
((__t = ( city )) == null ? '' : __t) +
', ' +
((__t = ( state )) == null ? '' : __t) +
', ' +
((__t = ( zipCode )) == null ? '' : __t) +
'<br>\r\n  ' +
((__t = ( country )) == null ? '' : __t) +
'\r\n  </li><br>\r\n\r\n  <li><u>House Details:</u><br>\r\n  Type: ' +
((__t = ( type )) == null ? '' : __t) +
'<br>\r\n  Price: ' +
((__t = ( price )) == null ? '' : __t) +
', HMO Fees: ' +
((__t = ( HMO )) == null ? '' : __t) +
'<br>\r\n  Year Built: ' +
((__t = ( yearBuilt )) == null ? '' : __t) +
'<br>\r\n  Number of Levels: ' +
((__t = ( nrLevels )) == null ? '' : __t) +
'<br>\r\n  Number of Bedrooms: ' +
((__t = ( nrBedrooms )) == null ? '' : __t) +
'<br> \r\n  Number of Bathrooms: ' +
((__t = ( nrBathrooms )) == null ? '' : __t) +
'<br>   \r\n  Number of Fireplaces: ' +
((__t = ( nrBedrooms )) == null ? '' : __t) +
'<br>  \r\n  Finished Basement: ' +
((__t = ( finishedBasement )) == null ? '' : __t) +
'<br> \r\n  School District: ' +
((__t = ( schoolDistrict )) == null ? '' : __t) +
'<br>\r\n  Description: ' +
((__t = ( description )) == null ? '' : __t) +
'\r\n  </li><br>\r\n\r\n  <li><u>Contact:</u><br>\r\n  Seller: ' +
((__t = ( sellingAgent )) == null ? '' : __t) +
'<br>\r\n  Contact Email: ' +
((__t = ( contactEmail )) == null ? '' : __t) +
'<br>\r\n  Contact Phone: ' +
((__t = ( contactPhone )) == null ? '' : __t) +
'<br> \r\n  </li><br>\r\n\r\n  <li><u>Other:</u><br>\r\n  Days on the Market: ' +
((__t = ( daysOnMarket )) == null ? '' : __t) +
'<br>\r\n  Open Houses: ' +
((__t = ( openHouse )) == null ? '' : __t) +
',\r\n  </li><br>\r\n  ';

}
return __p
};