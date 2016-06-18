this["TFT"] = this["TFT"] || {};

this["TFT"]["allFoodTrucks"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">All Trucks</h2>\r\n<ul class="trucksList"></ul>\r\n';

}
return __p
};

this["TFT"]["foodTruck"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h2 class="detailHeading">' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\r\n<p class="foodType">' +
((__t = ( foodType.join(', ') )) == null ? '' : __t) +
'</p>\r\n<ul class="detailList">\r\n\t';
 if (description.length) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="description">' +
((__t = ( description )) == null ? '' : __t) +
'</p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n\t';
 if (payment.length) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="detailList__category">Payment types accepted: <strong>' +
((__t = ( payment.join(', ') )) == null ? '' : __t) +
'</strong></p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n\t';
 if (schedule.length) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="detailList__category">Schedule: <strong>' +
((__t = ( schedule.join(', ') )) == null ? '' : __t) +
'</strong></p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n\t';
 if (website.length) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="detailList__category">Visit our <a href="' +
((__t = ( website )) == null ? '' : __t) +
'" class="detailList__link">website</a></p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n\t';
 if (Facebook.length) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="detailList__category">Like us on <a href="' +
((__t = ( Facebook )) == null ? '' : __t) +
'" class="detailList__link">Facebook</a></p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n\t';
 if (Twitter.length) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="detailList__category">Follow us on <a href="' +
((__t = ( Twitter )) == null ? '' : __t) +
'" class="detailList__link">Twitter</a></p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n\r\n</ul>\r\n';

}
return __p
};

this["TFT"]["foodTruckListItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="truckLink" href="/food-trucks/' +
((__t = ( name )) == null ? '' : __t) +
'">\r\n  <h2 class="detailHeading">' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\r\n  <p class="foodType">' +
((__t = ( foodType.join(', ') )) == null ? '' : __t) +
'</p>\r\n</a>\r\n';

}
return __p
};

this["TFT"]["foodTypeListItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="foodTypeLink" href="/food-types/' +
((__t = ( encodeURIComponent(type) )) == null ? '' : __t) +
'">' +
((__t = ( type )) == null ? '' : __t) +
'</a>\r\n';

}
return __p
};

this["TFT"]["foodTypes"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">All Food Types</h2>\r\n<ul class="foodTypesList"></ul>\r\n';

}
return __p
};

this["TFT"]["trucksByType"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">Food trucks for ' +
((__t = ( type )) == null ? '' : __t) +
'</h2>\r\n<ul class="trucksList"></ul>\r\n';

}
return __p
};

this["TFT"]["trucksToday"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">Food trucks available on ' +
((__t = ( today )) == null ? '' : __t) +
'</h2>\r\n<ul class="trucksList"></ul>\r\n';

}
return __p
};