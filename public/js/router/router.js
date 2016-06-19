'use strict';
var Backbone = require('backbone');
module.exports  = Backbone.Router.extend({
  routes :
  {
    '' : 'home',
    'new' : 'create',
    'edit' : 'edit'           
  }
});

