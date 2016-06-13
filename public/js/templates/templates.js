this["TFT"] = this["TFT"] || {};

this["TFT"]["allIdeas"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1 class="listHeading">ALL IDEAS</h1>\n<ul class="ideasList"></ul>\n';

}
return __p
};

this["TFT"]["idea"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h2 class="detailHeading">' +
((__t = ( ideaName )) == null ? '' : __t) +
'</h2>\n<ul class="detailList">\n\t';
 if (ideaDescription.length) { ;
__p += '\n\t\t<li class="detailList__item">\n\t\t\t<p class="idea">' +
((__t = ( ideaDescription )) == null ? '' : __t) +
'</p>\n\t\t</li>\n\t';
 } ;
__p += '\n  <p class="ranking">' +
((__t = ( ranking.join(', ') )) == null ? '' : __t) +
'</p>\n</ul>\n';

}
return __p
};

this["TFT"]["ideaListItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="ideaLink" href="/ideas/' +
((__t = ( name )) == null ? '' : __t) +
'">\n  <h2 class="detailHeading">Idea Name: ' +
((__t = ( ideaName )) == null ? '' : __t) +
'</h2>\n  <h2 class="detailHeading">Author Name: ' +
((__t = ( authorName )) == null ? '' : __t) +
'</h2>\n  <h4 class="detailHeading">Idea Description: ' +
((__t = ( ideaDescription )) == null ? '' : __t) +
'</h4>\n  <p class="ranking">' +
((__t = ( ranking.join(', ') )) == null ? '' : __t) +
'</p>\n</a>\n';

}
return __p
};

this["TFT"]["ideasByRank"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">Ideas with rank:  ' +
((__t = ( ranking )) == null ? '' : __t) +
'</h2>\n<ul class="ideasList"></ul>\n';

}
return __p
};

this["TFT"]["ranking"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">All Idea Rankings</h2>\n<ul class="rankingsList"></ul>\n';

}
return __p
};

this["TFT"]["rankingListItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="rankingLink" href="/idea_ranking/' +
((__t = ( encodeURIComponent(ranking) )) == null ? '' : __t) +
'">' +
((__t = ( ranking )) == null ? '' : __t) +
'</a>\n';

}
return __p
};