//temp note: seems to be done
'use strict';

var $ = require('jquery');


$(function () {

  var AppView = require('./views/AppView'); //AppView: top level component
  var app = new AppView({ el: 'body' }); //it's in charge of the body (therefore pretty much all of it)
});
