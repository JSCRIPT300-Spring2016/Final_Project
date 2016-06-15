this["TFT"] = this["TFT"] || {};

this["TFT"]["allNachos"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">All Nachos</h2>\r\n<ul class="nachosList"></ul>\r\n';

}
return __p
};

this["TFT"]["allRatings"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">All Locations</h2>\r\n<ul class="ratingsList"></ul>\r\n';

}
return __p
};

this["TFT"]["nachos"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h2 class="detailHeading">' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\r\n<p class="location">' +
((__t = ( location )) == null ? '' : __t) +
'</p>\r\n<ul class="detailList">\r\n\t';
 if (date.length) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="date">' +
((__t = ( date )) == null ? '' : __t) +
'</p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n\t';
 if (rating) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="detailList__category">Rating: <strong>' +
((__t = ( rating )) == null ? '' : __t) +
'</strong></p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n\t';
 if (sides.length) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="detailList__category">Sides: <strong>' +
((__t = ( sides.join(', ') )) == null ? '' : __t) +
'</strong></p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n\t';
 if (comments.length) { ;
__p += '\r\n\t\t<li class="detailList__item">\r\n\t\t\t<p class="detailList__category">Comments: ' +
((__t = ( comments )) == null ? '' : __t) +
'</p>\r\n\t\t</li>\r\n\t';
 } ;
__p += '\r\n</ul>\r\n';

}
return __p
};

this["TFT"]["nachosByRating"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">Nachos with rating ' +
((__t = ( rating )) == null ? '' : __t) +
'</h2>\r\n<ul class="nachosList"></ul>\r\n';

}
return __p
};

this["TFT"]["nachosListItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="nachosLink" href="/nachos/' +
((__t = ( name )) == null ? '' : __t) +
'">\r\n  <h2 class="detailHeading">' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\r\n  <p class="location">' +
((__t = ( location )) == null ? '' : __t) +
'</p>\r\n</a>\r\n';

}
return __p
};

this["TFT"]["ratingListItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="ratingLink" href="/rating/' +
((__t = ( encodeURIComponent(rating) )) == null ? '' : __t) +
'">' +
((__t = ( rating )) == null ? '' : __t) +
'</a>\r\n';

}
return __p
};