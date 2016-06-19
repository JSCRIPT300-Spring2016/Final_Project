global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

$(function () {
  var AppView = require('./views/AppView');
  var app = new AppView({ el: 'body' });
});
