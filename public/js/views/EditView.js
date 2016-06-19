'use strict';
var Backbone = require('backbone');
var Entries = require('../collections/collections');
var Entry = require('../models/models');
var Router = require('../router/router');
var router = new Router();
//Edit View
module.exports = Backbone.View.extend({
  el : '#entry',
  render : function(){
    var id = $('.id').val();
    var that = this;
    var entry = new Entry({id : id});
	entry.fetch({
	  success : function(entry){      		
	    var template = Handlebars.compile($('#entry-template').html());
	    var html = template({
	      editing: true,
		  entries: null,
		  activeEntryData: entry.toJSON()
	    });
	    that.$el.html(html);
	  }
    });		      		
  },
  events : {
    'click .update' : 'update' 
  },
  update : function(event){	          
    var name = $('[name="name"]').val();
	var address = $('[name="address"]').val();
	var description = $('[name="description"]').val();
	var idval = $('.id').val();
    var entry  = {
	  'id':idval,
	  'address': address,
      'name': name,
	  'description': description
    };
    var upd = new Entry();		          
    upd.save(entry,{});
	router.navigate('',{trigger:true});

	return false;
  }
});