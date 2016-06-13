this["TD"] = this["TD"] || {};

this["TD"]["allTodos"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">All Todos</h2>\n<ul class="taskList"></ul>';

}
return __p
};

this["TD"]["impTodos"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="listHeading">Important Todos</h2>\n<ul class="taskList"></ul>\n';

}
return __p
};

this["TD"]["todoListItem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class="deleteBtn" src="/img/smlCancel.svg" alt="delete">\n<span class="todoName">' +
((__t = ( name )) == null ? '' : __t) +
'</span>';

}
return __p
};