this["TFT"] = this["TFT"] || {};

this["TFT"]["header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1 class="header">Plan n\' Plant App</h1>\n<h4 class="subheading">Organizing Your Oregano</h4>\n';

}
return __p
};

this["TFT"]["plantItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( name )) == null ? '' : __t) +
'\n<ul>\n  <li>Number of plants: ' +
((__t = ( number )) == null ? '' : __t) +
'</li>\n  <li>Space per plant: ' +
((__t = ( spaceNeededPerPlant )) == null ? '' : __t) +
' sq. ft.</li>\n  <li>Total space needed: ' +
((__t = ( totalSpaceNeeded )) == null ? '' : __t) +
' sq. ft.</li>\n  <li>Date planted: ' +
((__t = ( datePlantedFormatted )) == null ? '' : __t) +
'</li>\n  <li>Date harvested: ' +
((__t = ( dateHarvestedFormatted )) == null ? '' : __t) +
'</li>\n</ul>\n';

}
return __p
};