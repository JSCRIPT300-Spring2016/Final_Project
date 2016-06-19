'use strict';
var Backbone = require('backbone');
var DisplayEntry = require('./views/DisplayView');
var CreateEntry = require('./views/CreateView');
var EditEntry = require('./views/EditView');
var Router = require('./router/router');

var displayEntry = new DisplayEntry({});
var createEntry  = new CreateEntry();
var editEntry = new EditEntry();
var router = new Router();

router.on('route:home',function(){
  displayEntry.render();
});
router.on('route:create',function(){
  createEntry.render();
});
router.on('route:edit',function(){
  editEntry.render();      
});

Backbone.history.start();